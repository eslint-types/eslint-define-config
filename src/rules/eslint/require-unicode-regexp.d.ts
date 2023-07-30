import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of `u` or `v` flag on RegExp.
 *
 * @see [require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp)
 */
export type RequireUnicodeRegexpRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of `u` or `v` flag on RegExp.
 *
 * @see [require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp)
 */
export interface RequireUnicodeRegexpRule {
  /**
   * Enforce the use of `u` or `v` flag on RegExp.
   *
   * @see [require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp)
   */
  'require-unicode-regexp': RequireUnicodeRegexpRuleConfig;
}
