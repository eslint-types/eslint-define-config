import { pascalCase } from 'change-case';
import type { Rule } from 'eslint';
// @ts-expect-error
import eslintPluginVue from 'eslint-plugin-vue';
import * as fs from 'fs';
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

// Generating rule files
const rulesDir: string = path.resolve(__dirname, '../src/rules');

const ruleProviderDir: string = path.resolve(rulesDir, 'vue');

fs.mkdirSync(ruleProviderDir, { mode: 0o755, recursive: true });

Object.entries((eslintPluginVue as Plugin).rules).forEach(([name, { meta }]) => {
  const rulePath: string = path.resolve(ruleProviderDir, `${name}.d.ts`);
  let ruleContent: string = `import type { RuleConfig } from '../rule-config';

  /**
   *
   */
  export type ${pascalCase(name)}RuleConfig = RuleConfig;

  /**
   *
   */
  export interface ${pascalCase(name)}Rule {
    /**
     *
     */
    'vue/${name}': ${pascalCase(name)}RuleConfig;
  }
  `;
  ruleContent = format(ruleContent, PRETTIER_OPTIONS);
  fs.writeFileSync(rulePath, ruleContent);
});

// Generating index.d.ts for rules
const indexPath: string = path.resolve(ruleProviderDir, 'index.d.ts');
let indexContent: string = Object.keys((eslintPluginVue as Plugin).rules)
  .map((name) => `import type { ${pascalCase(name)}Rule } from './${name}';`)
  .join('\n');

indexContent += `

/**
 * All @typescript-eslint rules.
 */
export type VueRules = ${Object.keys((eslintPluginVue as Plugin).rules)
  .map((name) => `${pascalCase(name)}Rule`)
  .join(' & ')}
`;

indexContent = format(indexContent, PRETTIER_OPTIONS);

fs.writeFileSync(indexPath, indexContent);
