import type { RuleConfig } from '../rule-config';

/**
 * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
 *
 * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax)
 */
export type CheckSyntaxRuleConfig = RuleConfig<[]>;

/**
 * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
 *
 * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax)
 */
export interface CheckSyntaxRule {
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   *
   * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax)
   */
  'jsdoc/check-syntax': CheckSyntaxRuleConfig;
}
