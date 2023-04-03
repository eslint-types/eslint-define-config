import { logger } from '@poppinss/cliui';
import { paramCase as kebabCase, pascalCase } from 'change-case';
import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { upperCaseFirst } from 'upper-case-first';
import type { Plugin } from '../contracts';
import { format } from './format';
import { JsDocBuilder } from './js-doc-builder';
import { generateTypeFromSchema } from './json-schema-to-ts';

export class RuleFile {
  private content: string = '';

  private readonly rulePath: string;
  private readonly ruleNamePascalCase: string;

  private isSchemaArray?: boolean;
  private mainSchema?: JSONSchema4;
  private sideSchema?: JSONSchema4;
  private thirdSchema?: JSONSchema4;

  public constructor(
    private readonly plugin: Plugin,
    private readonly pluginDirectory: string,
    private readonly ruleName: string,
    private readonly rule: Rule.RuleModule,
  ) {
    this.ruleNamePascalCase = pascalCase(this.ruleName);
    this.rulePath = resolve(this.pluginDirectory, `${ruleName}.d.ts`);
    this.assignSchemasInfo();
  }

  private assignSchemasInfo(): void {
    const schema: JSONSchema4 | JSONSchema4[] | undefined =
      this.rule.meta?.schema;
    // eslint-disable-next-line @typescript-eslint/typedef
    const isArray = Array.isArray(schema);

    this.mainSchema = isArray ? schema[0] : schema;
    this.sideSchema = isArray && schema.length > 1 ? schema[1] : undefined;
    this.thirdSchema = isArray && schema.length > 2 ? schema[2] : undefined;
    this.isSchemaArray = isArray;
  }

  /**
   * Build the rule description to append to the JSDoc.
   */
  public buildDescription(): string {
    let description: string = upperCaseFirst(
      this.rule.meta?.docs?.description ?? '',
    );

    if (description.length > 0 && !description.endsWith('.')) {
      description += '.';
    }

    return description.replace('*/', '');
  }

  /**
   * Build the `@see` url to the rule documentation to append to the JSDoc.
   */
  public buildSeeDocLink(): string {
    const { meta } = this.rule;
    const seeDocLink: string = meta?.docs?.url
      ? `@see [${this.ruleName}](${meta.docs.url})`
      : '';

    return seeDocLink;
  }

  /**
   * Generate a JSDoc with the rule description and `@see` url.
   */
  public generateTypeJsDoc(): string {
    return JsDocBuilder.build()
      .add(this.buildDescription())
      .add(' ')
      .add(this.rule.meta?.deprecated ? '@deprecated' : '')
      .add(this.rule.meta?.deprecated ? ' ' : '')
      .add(this.buildSeeDocLink())
      .output();
  }

  private readonly ruleSchemas: {
    Setting?: string;
    Config?: string;
    Option?: string;
    Partial: string[];
  } = { Partial: [] };

  /**
   * Generate a type from a JSON schema and append it to the file content.
   */
  private async generateJsonSchemaType(
    schema: JSONSchema4,
    comment: 'Setting' | 'Config' | 'Option',
  ): Promise<void> {
    const type: string = await generateTypeFromSchema(
      schema,
      this.ruleNamePascalCase + comment,
    );

    const fullSchema: string = type
      .replace(/export (type|interface) \w+\s*(=\s*)?/, '')
      .trim();
    const [mainSchema, ...parts] = fullSchema.split('\nexport ');
    this.ruleSchemas[comment] = mainSchema;
    this.ruleSchemas.Partial.push(...parts);
  }

  /**
   * Generate and append types for the rule schemas.
   */
  private async generateRuleSchemaTypes(): Promise<void> {
    if (this.thirdSchema) {
      await this.generateJsonSchemaType(this.thirdSchema, 'Setting');
    }

    if (this.sideSchema) {
      await this.generateJsonSchemaType(this.sideSchema, 'Config');
    }

    if (this.mainSchema) {
      await this.generateJsonSchemaType(this.mainSchema, 'Option');
    }
  }

  /**
   * Scoped rule name ESLint config uses.
   */
  public prefixedRuleName(): string {
    const { prefix, name } = this.plugin;
    let rulePrefix: string = (prefix ?? kebabCase(name)) + '/';

    if (name === 'Eslint') {
      rulePrefix = '';
    }

    return `${rulePrefix}${this.ruleName}`;
  }

  /**
   * Append the final rule interface to the file content.
   */
  private generateRuleContent(): void {
    const ruleName: string = this.ruleNamePascalCase;

    const ruleSchema: string[] = (
      this.isSchemaArray
        ? [
            'RuleLevel',
            this.ruleSchemas.Option,
            this.ruleSchemas.Config,
            this.ruleSchemas.Setting,
          ]
        : this.mainSchema
        ? ['RuleLevel', `...(${this.ruleSchemas.Option ?? ''})`]
        : ['RuleLevel']
    ).filter((e): e is string => !!e);

    const nestedDepth: number = this.ruleName.split('/').length;
    const importsRootPath: string = '../'.repeat(nestedDepth);

    this.content = `
    import type { Rule } from '${importsRootPath}rule-config';
    import type { RuleLevel } from '${importsRootPath}rule-severity';
    export interface ${ruleName}Rule {
      ${this.generateTypeJsDoc()}
      '${this.prefixedRuleName()}': Rule<[${ruleSchema.join(',\n')}]>
    }
    ${this.ruleSchemas.Partial.join('\n')}
    `;
  }

  /**
   * Create the directory of the rule file if it doesn't exist.
   */
  private createRuleDirectory(): void {
    const subPath: string = dirname(this.rulePath.toLowerCase());
    if (!existsSync(subPath)) {
      mkdirSync(subPath, { recursive: true });
    }
  }

  /**
   * Generate a file with the rule typings.
   */
  public async generate(): Promise<string> {
    await this.generateRuleSchemaTypes();

    this.generateRuleContent();
    this.content = format(this.content);

    return this.content;
  }

  public errorFilePath(): string {
    return this.rulePath.replace(/.d.ts$/, '.error.d.ts');
  }

  /**
   * Must be called after `generate()` to write the file.
   */
  public writeGeneratedContent(): void {
    this.createRuleDirectory();

    writeFileSync(this.rulePath, this.content);
  }

  /**
   * Must be called after `generate()` to write the error.
   */
  public writeGeneratedError(error: Error): void {
    this.createRuleDirectory();
    const errorText: string = error.toString().trimEnd().replace(/^/gm, ' * ');
    const { isSchemaArray, mainSchema, sideSchema, thirdSchema } = this;
    const context: string = JSON.stringify(
      {
        isSchemaArray,
        mainSchema,
        sideSchema,
        thirdSchema,
      },
      null,
      '  ',
    );
    writeFileSync(
      this.errorFilePath(),
      `/**\n${errorText}\n */\n\n${this.content}\n\n\nexport const context: ${context}`,
    );
  }

  /**
   * Apply a patch to the generated content if a diff file exists for it.
   *
   * Must be called after `generate()`.
   */
  public applyPatch(): void {
    const pathParts: string[] = this.rulePath.split(/[\\/]/);
    const ruleFileName: string = pathParts[pathParts.length - 1] ?? '';
    const rulePlugin: string = pathParts[pathParts.length - 2] ?? '';

    const diffFile: string = resolve(
      __dirname,
      '..',
      'diffs',
      'rules',
      rulePlugin,
      `${ruleFileName}.diff`,
    );

    const ruleName: string = this.prefixedRuleName();

    if (existsSync(diffFile)) {
      logger.logUpdate(logger.colors.yellow(`  🧹 Adjusting ${ruleName}`));
      logger.logUpdatePersist();

      execSync(`git apply ${diffFile}`);
    }
  }
}
