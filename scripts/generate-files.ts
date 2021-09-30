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

function generateType(propertyDefinition: JSONSchema4): string {
  switch (propertyDefinition.type) {
    case 'string':
    case 'boolean':
    case 'number':
      return propertyDefinition.type;
    case 'integer':
      // TODO: Read further details
      return 'number';
    case 'array':
      // TODO: Handle array
      return 'any[]';
    case 'object':
      // TODO: Handle nested objects
      return 'Record<string, any>';
    case undefined:
      // TODO: Could be an object
      break;
    default:
      console.log(propertyDefinition.type);
      break;
  }
  return 'any';
}

for (const pluginName in generationMap) {
  const { rules, name } = generationMap[pluginName]!;

  const ruleProviderDir: string = path.resolve(rulesDir, pluginName);

  fs.mkdirSync(ruleProviderDir, { mode: 0o755, recursive: true });

  Object.entries(rules).forEach(([ruleName, { meta }]) => {
    const rulePath: string = path.resolve(ruleProviderDir, `${ruleName}.d.ts`);
    let ruleContent: string = "import type { RuleConfig } from '../rule-config';";

    const ruleNamePascalCase: string = pascalCase(ruleName);

    const description: string = upperCaseFirst(meta?.docs?.description ?? '');
    const seeDocLink: string = meta?.docs?.url ? `@see [${ruleName}](${meta.docs.url})` : '';

    const schema: JSONSchema4 | JSONSchema4[] | undefined = meta?.schema;
    const mainSchema: JSONSchema4 | undefined = Array.isArray(schema) ? schema[0] : schema;
    const hasOptionProperties: boolean = !!mainSchema?.properties;
    if (mainSchema?.properties) {
      ruleContent += `

/**
 * Option.
 */
export type ${ruleNamePascalCase}Option = {`;

      Object.entries(mainSchema.properties).forEach(([propertyName, propertyDefinition]) => {
        ruleContent += `
  /**
   * ${seeDocLink}
   */
  '${propertyName}'?: ${generateType(propertyDefinition)};\n`;
      });

      ruleContent += `}

/**
 * Options.
 */
export type ${ruleNamePascalCase}Options = [${ruleNamePascalCase}Option?];`;
    }

    ruleContent += `

  /**
   * ${description}
   *
   * ${seeDocLink}
   */
  export type ${ruleNamePascalCase}RuleConfig = RuleConfig<${
      hasOptionProperties ? `${ruleNamePascalCase}Options` : '[]'
    }>;

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
