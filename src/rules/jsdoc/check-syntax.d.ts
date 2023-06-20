import type { RuleConfig } from '../rule-config';

/**
 * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
 *
 * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header)
 */
export type CheckSyntaxRuleConfig = RuleConfig<[]>;

/**
 * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
 *
 * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header)
 */
export interface CheckSyntaxRule {
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   *
   * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header)
   */
  'jsdoc/check-syntax': CheckSyntaxRuleConfig;
}
