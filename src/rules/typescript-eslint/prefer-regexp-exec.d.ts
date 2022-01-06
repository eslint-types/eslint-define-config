import type { RuleConfig } from '../rule-config';

/**
 * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
 *
 * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
 */
export type PreferRegexpExecRuleConfig = RuleConfig<[]>;

/**
 * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
 *
 * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
 */
export interface PreferRegexpExecRule {
  /**
   * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
   *
   * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
   */
  '@typescript-eslint/prefer-regexp-exec': PreferRegexpExecRuleConfig;
}
