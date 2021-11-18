import type { RuleConfig } from '../rule-config';

/**
 * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
 *
 * @see [prefer-regexp-exec](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md)
 */
export type PreferRegexpExecRuleConfig = RuleConfig<[]>;

/**
 * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
 *
 * @see [prefer-regexp-exec](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md)
 */
export interface PreferRegexpExecRule {
  /**
   * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
   *
   * @see [prefer-regexp-exec](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md)
   */
  '@typescript-eslint/prefer-regexp-exec': PreferRegexpExecRuleConfig;
}
