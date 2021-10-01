// @ts-expect-error
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import { camelCase, pascalCase } from 'change-case';
import type { Rule } from 'eslint';
import * as eslint from 'eslint';
// @ts-expect-error
import eslintPluginJSDoc from 'eslint-plugin-jsdoc';
// @ts-expect-error
import eslintPluginSpellcheck from 'eslint-plugin-spellcheck';
// @ts-expect-error
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
// @ts-expect-error
import eslintPluginVue from 'eslint-plugin-vue';
import * as fs from 'fs';
import type { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import * as path from 'path';
import type { Options } from 'prettier';
import { format } from 'prettier';
import { upperCaseFirst } from 'upper-case-first';

interface Plugin {
  name: string;
  prefix?: string;
  rules: Record<string, Rule.RuleModule>;
}

const PRETTIER_OPTIONS: Options = {
  parser: 'typescript',
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
};

const generationMap: Record<string, Plugin> = {
  eslint: {
    name: 'Eslint',
    rules: Object.fromEntries(new eslint.Linter().getRules().entries())
  },
  'typescript-eslint': {
    name: 'TypeScript',
    prefix: '@typescript-eslint',
    rules: (eslintPluginTypeScript as Plugin).rules
  },
  jsdoc: {
    name: 'JSDoc',
    rules: (eslintPluginJSDoc as Plugin).rules
  },
  spellcheck: {
    name: 'Spellcheck',
    rules: (eslintPluginSpellcheck as Plugin).rules
  },
  unicorn: {
    name: 'Unicorn',
    rules: (eslintPluginUnicorn as Plugin).rules
  },
  vue: {
    name: 'Vue',
    rules: (eslintPluginVue as Plugin).rules
  }
};

// Generating rule files
const rulesDir: string = path.resolve(__dirname, '../src/rules');

async function main(): Promise<void> {
  for (const pluginName in generationMap) {
    const { rules, name, prefix } = generationMap[pluginName]!;

    const ruleProviderDir: string = path.resolve(rulesDir, pluginName);

    fs.mkdirSync(ruleProviderDir, { mode: 0o755, recursive: true });

    const failedRules: string[] = [];
    for (const [ruleName, { meta }] of Object.entries(rules)) {
      try {
        const rulePath: string = path.resolve(ruleProviderDir, `${ruleName}.d.ts`);
        let ruleContent: string = "import type { RuleConfig } from '../rule-config';";

        const ruleNamePascalCase: string = pascalCase(ruleName);

        let description: string = upperCaseFirst(meta?.docs?.description ?? '');
        if (description.length > 0 && !description.endsWith('.')) {
          description += '.';
        }
        const seeDocLink: string = meta?.docs?.url ? `@see [${ruleName}](${meta.docs.url})` : '';

        const deprecated: boolean | undefined = meta?.deprecated;

        const schema: JSONSchema4 | JSONSchema4[] | undefined = meta?.schema;
        const schemaIsObject: boolean = !Array.isArray(schema);
        const mainSchema: JSONSchema4 | undefined = Array.isArray(schema) ? schema[0] : schema;
        const sideSchema: JSONSchema4 | undefined =
          schema && Array.isArray(schema) && schema.length > 1 ? schema[1] : undefined;
        const thirdSchema: JSONSchema4 | undefined =
          schema && Array.isArray(schema) && schema.length > 2 ? schema[2] : undefined;
        if (mainSchema) {
          if (sideSchema) {
            if (thirdSchema) {
              const ruleSetting: string = await compile(thirdSchema, `${ruleNamePascalCase}Setting`, {
                bannerComment: '',
                style: {
                  bracketSpacing: true,
                  printWidth: 120,
                  semi: true,
                  singleQuote: true,
                  tabWidth: 2,
                  trailingComma: 'none',
                  useTabs: false
                },
                unknownAny: false
              });
              ruleContent += `

/**
 * Setting.
 */
${ruleSetting}`;
            }
            const ruleConfig: string = await compile(sideSchema, `${ruleNamePascalCase}Config`, {
              bannerComment: '',
              style: {
                bracketSpacing: true,
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 2,
                trailingComma: 'none',
                useTabs: false
              },
              unknownAny: false
            });
            ruleContent += `

/**
 * Config.
 */
${ruleConfig}`;
          }

          const ruleOption: string = await compile(mainSchema, `${ruleNamePascalCase}Option`, {
            bannerComment: '',
            style: {
              bracketSpacing: true,
              printWidth: 120,
              semi: true,
              singleQuote: true,
              tabWidth: 2,
              trailingComma: 'none',
              useTabs: false
            },
            unknownAny: false
          });

          ruleContent += `

/**
 * Option.
 */
${ruleOption}

/**
 * Options.
 */
export type ${ruleNamePascalCase}Options = ${
            schemaIsObject
              ? `${ruleNamePascalCase}Option`
              : `[${ruleNamePascalCase}Option?${
                  sideSchema
                    ? `, ${ruleNamePascalCase}Config?${thirdSchema ? `, ${ruleNamePascalCase}Setting?` : ''}`
                    : ''
                }]`
          };`;
        }

        // TODO: Add third option

        ruleContent += `

  /**
   * ${description}${
          deprecated
            ? `
   *
   * @deprecated`
            : ''
        }
   *
   * ${seeDocLink}
   */
  export type ${ruleNamePascalCase}RuleConfig = RuleConfig<${mainSchema ? `${ruleNamePascalCase}Options` : '[]'}>;

  /**
   * ${description}${
          deprecated
            ? `
   *
   * @deprecated`
            : ''
        }
   *
   * ${seeDocLink}
   */
  export interface ${ruleNamePascalCase}Rule {
    /**
     * ${description}${
          deprecated
            ? `
     *
     * @deprecated`
            : ''
        }
     *
     * ${seeDocLink}
     */
    '${
      pluginName !== 'eslint' ? `${prefix ?? camelCase(pluginName)}/` : ''
    }${ruleName}': ${ruleNamePascalCase}RuleConfig;
  }
  `;
        ruleContent = format(ruleContent, PRETTIER_OPTIONS);
        fs.writeFileSync(rulePath, ruleContent);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Failed to generate rule '${ruleName}' for ${name}.\n`, error.stack, '\n');
        }
        failedRules.push(ruleName);
      }
    }

    // Generating index.d.ts for rules
    const indexPath: string = path.resolve(ruleProviderDir, 'index.d.ts');
    let indexContent: string = Object.keys(rules)
      .filter((name) => !failedRules.includes(name))
      .map((name) => `import type { ${pascalCase(name)}Rule } from './${name}';`)
      .join('\n');

    indexContent += `

/**
 * All ${name} rules.
 */
export type ${name}Rules = ${Object.keys(rules)
      .filter((name) => !failedRules.includes(name))
      .map((name) => `${pascalCase(name)}Rule`)
      .join(' & ')}
`;

    indexContent = format(indexContent, PRETTIER_OPTIONS);

    fs.writeFileSync(indexPath, indexContent);
  }
}

main()
  .then(() => {
    //
  })
  .catch((error) => {
    console.log('Failed to generate rule files.', error);
  });
