import type { RuleConfig } from '../rule-config';

/**
 * Prefer `for…of` over `Array#forEach(…)`.
 *
 * @see [no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-array-for-each.md)
 */
export type NoArrayForEachRuleConfig = RuleConfig<[]>;

/**
 * Prefer `for…of` over `Array#forEach(…)`.
 *
 * @see [no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-array-for-each.md)
 */
export interface NoArrayForEachRule {
  /**
   * Prefer `for…of` over `Array#forEach(…)`.
   *
   * @see [no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-array-for-each.md)
   */
  'unicorn/no-array-for-each': NoArrayForEachRuleConfig;
}
