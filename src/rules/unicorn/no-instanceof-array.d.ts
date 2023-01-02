import type { RuleConfig } from '../rule-config';

/**
 * Require `Array.isArray()` instead of `instanceof Array`.
 *
 * @see [no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-instanceof-array.md)
 */
export type NoInstanceofArrayRuleConfig = RuleConfig<[]>;

/**
 * Require `Array.isArray()` instead of `instanceof Array`.
 *
 * @see [no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-instanceof-array.md)
 */
export interface NoInstanceofArrayRule {
  /**
   * Require `Array.isArray()` instead of `instanceof Array`.
   *
   * @see [no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-instanceof-array.md)
   */
  'unicorn/no-instanceof-array': NoInstanceofArrayRuleConfig;
}
