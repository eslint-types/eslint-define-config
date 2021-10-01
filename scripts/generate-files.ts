import { camelCase, pascalCase } from 'change-case';
import type { Rule } from 'eslint';
// @ts-expect-error
import eslintPluginJSDoc from 'eslint-plugin-jsdoc';
// @ts-expect-error
import eslintPluginSpellcheck from 'eslint-plugin-spellcheck';
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
  jsdoc: {
    name: 'JSDoc',
    rules: (eslintPluginJSDoc as Plugin).rules
  },
  spellcheck: {
    name: 'Spellcheck',
    rules: (eslintPluginSpellcheck as Plugin).rules
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
    const { rules, name } = generationMap[pluginName]!;

    const ruleProviderDir: string = path.resolve(rulesDir, pluginName);

    fs.mkdirSync(ruleProviderDir, { mode: 0o755, recursive: true });

    for (const [ruleName, { meta }] of Object.entries(rules)) {
      const rulePath: string = path.resolve(ruleProviderDir, `${ruleName}.d.ts`);
      let ruleContent: string = "import type { RuleConfig } from '../rule-config';";

      const ruleNamePascalCase: string = pascalCase(ruleName);

      const description: string = upperCaseFirst(meta?.docs?.description ?? '');
      const seeDocLink: string = meta?.docs?.url ? `@see [${ruleName}](${meta.docs.url})` : '';

      const schema: JSONSchema4 | JSONSchema4[] | undefined = meta?.schema;
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
export type ${ruleNamePascalCase}Options = [${ruleNamePascalCase}Option?${
          sideSchema ? `, ${ruleNamePascalCase}Config?${thirdSchema ? `, ${ruleNamePascalCase}Setting?` : ''}` : ''
        }];`;
      }

      // TODO: Add third option

      ruleContent += `

  /**
   * ${description}
   *
   * ${seeDocLink}
   */
  export type ${ruleNamePascalCase}RuleConfig = RuleConfig<${mainSchema ? `${ruleNamePascalCase}Options` : '[]'}>;

  /**
   * ${description}
   *
   * ${seeDocLink}
   */
  export interface ${ruleNamePascalCase}Rule {
    /**
     * ${description}
     *
     * ${seeDocLink}
     */
    '${camelCase(pluginName)}/${ruleName}': ${ruleNamePascalCase}RuleConfig;
  }
  `;
      ruleContent = format(ruleContent, PRETTIER_OPTIONS);
      fs.writeFileSync(rulePath, ruleContent);
    }

    // Generating index.d.ts for rules
    const indexPath: string = path.resolve(ruleProviderDir, 'index.d.ts');
    let indexContent: string = Object.keys(rules)
      .map((name) => `import type { ${pascalCase(name)}Rule } from './${name}';`)
      .join('\n');

    indexContent += `

/**
 * All ${name} rules.
 */
export type ${name}Rules = ${Object.keys(rules)
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
  .catch(() => {
    //
  });
