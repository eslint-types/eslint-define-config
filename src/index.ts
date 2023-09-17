import type { ESLintConfig } from './config';
import type { FlatESLintConfig } from './flat-config';
import type { Rules } from './rules';
import type { RuleConfig } from './rules/rule-config';

/**
 * Define an ESLint config.
 *
 * @param config ESLint config.
 * @returns ESLint config.
 */
export function defineConfig(config: ESLintConfig): ESLintConfig {
  return config;
}

/**
 * Define an item of Flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config an item of Flat ESLint config.
 * @returns an item of Flat ESLint config.
 */
export function defineFlatConfig(config: FlatESLintConfig): FlatESLintConfig;

/**
 * Define a flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config Flat ESLint config.
 * @returns Flat ESLint config.
 */
export function defineFlatConfig(
  config: ReadonlyArray<FlatESLintConfig>,
): FlatESLintConfig[];

export function defineFlatConfig(config: unknown): unknown {
  return config;
}

export function defineRules(
  pluginName: string,
  rules: Record<string, RuleConfig>,
): Rules {
  if (pluginName === 'eslint') {
    return rules;
  }

  return Object.entries(rules).reduce<Record<string, RuleConfig>>(
    (prev, [key, value]) => {
      prev[`${pluginName}/${key}`] = value;
      return prev;
    },
    {},
  );
}

export * from './config';
export * from './flat-config';
export * from './parser-options';
export * from './rules';
