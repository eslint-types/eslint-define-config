/* eslint-disable */

const fs = require('fs');
const path = require('path');

const rulesDir = path.resolve(__dirname, '../src/rules');

const ruleNameInput = process.argv[2];
if (!ruleNameInput) {
  console.warn('No rule name provided');
  return;
}

let ruleProvider = 'eslint';
let ruleName = ruleNameInput;

if (ruleNameInput.includes('/')) {
  const parts = ruleNameInput.split('/');
  ruleProvider = parts[0];
  ruleName = parts[1];
}

function normalizeRuleProvider(provider) {
  if (provider.startsWith('@')) {
    return provider.slice(1);
  }
  return provider;
}

console.log({ ruleName, ruleProvider });

const ruleProviderDir = path.resolve(rulesDir, normalizeRuleProvider(ruleProvider));
const rulePath = path.resolve(ruleProviderDir, `${ruleName}.d.ts`);

/**
 * @param {string} name
 * @param {string} provider
 */
function generateRuleFileContent(name, provider) {
  const PascalCase = name.replace(/(\w)(\w*)/g, (_, g1, g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/-/g, '');
  const kebabCase = name;

  let RuleLink = '<RuleLink>';
  switch (provider) {
    case 'eslint':
      RuleLink = `https://eslint.org/docs/rules/${kebabCase}`;
      break;
    case '@typescript-eslint':
      RuleLink = `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${kebabCase}.md`;
      break;
    case 'import':
      RuleLink = `https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/${kebabCase}.md`;
      break;
    case 'node':
      RuleLink = `https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/${kebabCase}.md`;
      break;
  }

  provider = provider === 'eslint' ? '' : `${provider}/`;

  return `import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ${PascalCase}Option = {
  /**
   * <OptionDescription>.
   *
   * @default '<default>'
   *
   * @see [example](<OptionLink>)
   */
  example: string;
};

/**
 * Options.
 */
export type ${PascalCase}Options = [${PascalCase}Option?];

/**
 * <RuleDescription>.
 *
 * @see [${kebabCase}](${RuleLink})
 */
export type ${PascalCase}RuleConfig = RuleConfig<${PascalCase}Options>;

/**
 * <RuleDescription>.
 *
 * @see [${kebabCase}](${RuleLink})
 */
export interface ${PascalCase}Rule {
  /**
   * <RuleDescription>.
   *
   * @see [${kebabCase}](${RuleLink})
   */
  '${provider}${kebabCase}': ${PascalCase}RuleConfig;
}
`;
}

fs.mkdirSync(ruleProviderDir, { mode: 0o755, recursive: true });

fs.writeFileSync(rulePath, generateRuleFileContent(ruleName, ruleProvider));
