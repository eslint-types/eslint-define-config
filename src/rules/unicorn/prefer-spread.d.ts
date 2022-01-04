import type { RuleConfig } from '../rule-config';

/**
 * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#slice()` and `String#split('')`.
 *
 * @see [prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-spread.md)
 */
export type PreferSpreadRuleConfig = RuleConfig<[]>;

/**
 * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#slice()` and `String#split('')`.
 *
 * @see [prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-spread.md)
 */
export interface PreferSpreadRule {
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#slice()` and `String#split('')`.
   *
   * @see [prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-spread.md)
   */
  'unicorn/prefer-spread': PreferSpreadRuleConfig;
}
