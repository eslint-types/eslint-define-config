import { camelCase, pascalCase } from 'change-case';
import type { Rule } from 'eslint';
// @ts-expect-error
import eslintPluginJSDoc from 'eslint-plugin-jsdoc';
// @ts-expect-error
import eslintPluginVue from 'eslint-plugin-vue';
import * as fs from 'fs';
import type { JSONSchema4 } from 'json-schema';
import * as path from 'path';
import type { Options } from 'prettier';
import { format } from 'prettier';

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
  vue: {
    name: 'Vue',
    rules: (eslintPluginVue as Plugin).rules
  }
};

// Generating rule files
const rulesDir: string = path.resolve(__dirname, '../src/rules');

for (const pluginName in generationMap) {
  const { rules, name } = generationMap[pluginName]!;

  const ruleProviderDir: string = path.resolve(rulesDir, pluginName);

  fs.mkdirSync(ruleProviderDir, { mode: 0o755, recursive: true });

  Object.entries(rules).forEach(([ruleName, { meta }]) => {
    const rulePath: string = path.resolve(ruleProviderDir, `${ruleName}.d.ts`);
    let ruleContent: string = "import type { RuleConfig } from '../rule-config';";

    const schema: JSONSchema4 | JSONSchema4[] | undefined = meta?.schema;
    const mainSchema: JSONSchema4 | undefined = Array.isArray(schema) ? schema[0] : schema;
    const hasOptionProperties: boolean = !!mainSchema?.properties;
    if (mainSchema?.properties) {
      ruleContent += `

/**
 * Option.
 */
export type ${pascalCase(ruleName)}Option = {`;

      Object.entries(mainSchema.properties).forEach(([propertyName, propertyDefinition]) => {
        ruleContent += `
  /**
   * @see [${ruleName}](${meta?.docs?.url})
   */
  '${propertyName}'?: any;\n`;
      });

      ruleContent += `}

/**
 * Options.
 */
export type ${pascalCase(ruleName)}Options = [${pascalCase(ruleName)}Option?];`;
    }

    ruleContent += `

  /**
   * ${meta?.docs?.description}
   *
   * @see [${ruleName}](${meta?.docs?.url})
   */
  export type ${pascalCase(ruleName)}RuleConfig = RuleConfig<${
      hasOptionProperties ? `${pascalCase(ruleName)}Options` : '[]'
    }>;

  /**
   * ${meta?.docs?.description}
   *
   * @see [${ruleName}](${meta?.docs?.url})
   */
  export interface ${pascalCase(ruleName)}Rule {
    /**
     * ${meta?.docs?.description}
     *
     * @see [${ruleName}](${meta?.docs?.url})
     */
    '${camelCase(pluginName)}/${ruleName}': ${pascalCase(ruleName)}RuleConfig;
  }
  `;
    ruleContent = format(ruleContent, PRETTIER_OPTIONS);
    fs.writeFileSync(rulePath, ruleContent);
  });

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
