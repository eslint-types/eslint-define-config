import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PreferTernaryOption = 'always' | 'only-single-line';

/**
 * Options.
 */
export type PreferTernaryOptions = [PreferTernaryOption?];

/**
 * Prefer ternary expressions over simple `if-else` statements.
 *
 * @see [prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-ternary.md)
 */
export type PreferTernaryRuleConfig = RuleConfig<PreferTernaryOptions>;

/**
 * Prefer ternary expressions over simple `if-else` statements.
 *
 * @see [prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-ternary.md)
 */
export interface PreferTernaryRule {
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   *
   * @see [prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-ternary.md)
   */
  'unicorn/prefer-ternary': PreferTernaryRuleConfig;
}
