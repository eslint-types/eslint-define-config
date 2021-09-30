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
    rules: (eslintPluginJSDoc as Plugin).rules
  },
  vue: {
    rules: (eslintPluginVue as Plugin).rules
  }
};

// Generating rule files
const rulesDir: string = path.resolve(__dirname, '../src/rules');

for (const pluginName in generationMap) {
  const { rules } = generationMap[pluginName]!;

  const ruleProviderDir: string = path.resolve(rulesDir, pluginName);

  fs.mkdirSync(ruleProviderDir, { mode: 0o755, recursive: true });

  Object.entries(rules).forEach(([name, { meta }]) => {
    const rulePath: string = path.resolve(ruleProviderDir, `${name}.d.ts`);
    let ruleContent: string = "import type { RuleConfig } from '../rule-config';";

    const schema: JSONSchema4 | JSONSchema4[] | undefined = meta?.schema;
    const mainSchema: JSONSchema4 | undefined = Array.isArray(schema) ? schema[0] : schema;
    const hasOptionProperties: boolean = !!mainSchema?.properties;
    if (mainSchema?.properties) {
      ruleContent += `

/**
 * Option.
 */
export type ${pascalCase(name)}Option = {`;

      Object.entries(mainSchema.properties).forEach(([propertyName, propertyDefinition]) => {
        ruleContent += `
  /**
   * @see [${name}](${meta?.docs?.url})
   */
  '${propertyName}'?: any;\n`;
      });

      ruleContent += `}

/**
 * Options.
 */
export type ${pascalCase(name)}Options = [${pascalCase(name)}Option?];`;
    }

    ruleContent += `

  /**
   * ${meta?.docs?.description}
   *
   * @see [${name}](${meta?.docs?.url})
   */
  export type ${pascalCase(name)}RuleConfig = RuleConfig<${hasOptionProperties ? `${pascalCase(name)}Options` : '[]'}>;

  /**
   * ${meta?.docs?.description}
   *
   * @see [${name}](${meta?.docs?.url})
   */
  export interface ${pascalCase(name)}Rule {
    /**
     * ${meta?.docs?.description}
     *
     * @see [${name}](${meta?.docs?.url})
     */
    '${camelCase(pluginName)}/${name}': ${pascalCase(name)}RuleConfig;
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
 * All ${camelCase(pluginName)} rules.
 */
export type ${pascalCase(pluginName)}Rules = ${Object.keys(rules)
    .map((name) => `${pascalCase(name)}Rule`)
    .join(' & ')}
`;

  indexContent = format(indexContent, PRETTIER_OPTIONS);

  fs.writeFileSync(indexPath, indexContent);
}
