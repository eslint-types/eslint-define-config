import type { RuleConfig } from '../rule-config';

/**
 * Enforce `RegExp#exec` over `String#match` if no global flag is provided.
 *
 * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
 */
export type PreferRegexpExecRuleConfig = RuleConfig<[]>;

/**
 * Enforce `RegExp#exec` over `String#match` if no global flag is provided.
 *
 * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
 */
export interface PreferRegexpExecRule {
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided.
   *
   * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
   */
  '@typescript-eslint/prefer-regexp-exec': PreferRegexpExecRuleConfig;
}
