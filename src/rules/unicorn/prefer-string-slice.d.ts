import type { RuleConfig } from '../rule-config';

/**
 * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
 *
 * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-string-slice.md)
 */
export type PreferStringSliceRuleConfig = RuleConfig<[]>;

/**
 * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
 *
 * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-string-slice.md)
 */
export interface PreferStringSliceRule {
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   *
   * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-string-slice.md)
   */
  'unicorn/prefer-string-slice': PreferStringSliceRuleConfig;
}
