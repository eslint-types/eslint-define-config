import { paramCase as kebabCase, pascalCase } from 'change-case';
import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
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

  private isSchemaArray!: boolean;
  private mainSchema?: JSONSchema4;
  private sideSchema?: JSONSchema4;
  private thirdSchema?: JSONSchema4;

  public constructor(
    private readonly plugin: Plugin,
    pluginDirectory: string,
    private readonly ruleName: string,
    private readonly rule: Rule.RuleModule,
  ) {
    this.ruleNamePascalCase = pascalCase(this.ruleName);
    this.rulePath = resolve(pluginDirectory, `${ruleName}.d.ts`);
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
   * Append the `import type { RuleConfig } from '../rule-config'` at the top of the file.
   */
  public appendRuleConfigImport(): void {
    const nestedDepth: number = this.ruleName.split('/').length;
    const ruleConfigImportPath: string = `${'../'.repeat(
      nestedDepth,
    )}rule-config`;
    this.content += `import type { RuleConfig } from '${ruleConfigImportPath}'\n\n`;
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

  /**
   * Generate a type from a JSON schema and append it to the file content.
   */
  private async appendJsonSchemaType(
    schema: JSONSchema4,
    comment: string,
  ): Promise<void> {
    const type: string = await generateTypeFromSchema(
      schema,
      this.ruleNamePascalCase + comment,
    );

    const jsdoc: string = JsDocBuilder.build().add(`${comment}.`).output();
    this.content += `\n${jsdoc}`;
    this.content += `\n${type}\n`;
  }

  /**
   * Generate and append types for the rule schemas.
   */
  private async appendRuleSchemaTypes(): Promise<void> {
    if (this.thirdSchema) {
      await this.appendJsonSchemaType(this.thirdSchema, 'Setting');
    }

    if (this.sideSchema) {
      await this.appendJsonSchemaType(this.sideSchema, 'Config');
    }

    if (this.mainSchema) {
      await this.appendJsonSchemaType(this.mainSchema, 'Option');
    }
  }

  /**
   * Append the rule type options to the file content.
   */
  private appendRuleOptions(): void {
    const ruleName: string = this.ruleNamePascalCase;

    let type: string = '';
    if (!this.isSchemaArray) {
      type = `${ruleName}Option`;
    } else if (this.thirdSchema) {
      type = `[${ruleName}Option?, ${ruleName}Config?, ${ruleName}Setting?]`;
    } else if (this.sideSchema) {
      type = `[${ruleName}Option?, ${ruleName}Config?]`;
    } else if (this.mainSchema) {
      type = `[${ruleName}Option?]`;
    }

    this.content += JsDocBuilder.build().add('Options.').output() + '\n';
    this.content += `export type ${ruleName}Options = ${type}\n\n`;
  }

  /**
   * Append the rule config type to the file content.
   */
  private appendRuleConfig(): void {
    const ruleName: string = this.ruleNamePascalCase;
    const genericContent: string = this.mainSchema
      ? `${ruleName}Options`
      : '[]';

    this.content += this.generateTypeJsDoc() + '\n';
    this.content += `export type ${ruleName}RuleConfig = RuleConfig<${genericContent}>;\n\n`;
  }

  /**
   * Append the final rule interface to the file content.
   */
  private appendRule(): void {
    const ruleName: string = this.ruleNamePascalCase;
    const { prefix, name } = this.plugin;
    let rulePrefix: string = (prefix ?? kebabCase(name)) + '/';
    if (name === 'Eslint') {
      rulePrefix = '';
    }

    this.content += this.generateTypeJsDoc() + '\n';

    this.content += `export interface ${ruleName}Rule {`;
    this.content += `${this.generateTypeJsDoc()}\n`;
    this.content += `'${rulePrefix}${this.ruleName}': ${ruleName}RuleConfig;`;
    this.content += '}';
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
    this.appendRuleConfigImport();
    await this.appendRuleSchemaTypes();

    if (this.mainSchema) {
      this.appendRuleOptions();
    }

    this.appendRuleConfig();
    this.appendRule();

    this.content = format(this.content);

    return this.content;
  }

  /**
   * Must be called after `generate()` to write the file.
   */
  public writeGeneratedContent(): void {
    this.createRuleDirectory();

    writeFileSync(this.rulePath, this.content);
  }
}
