import type { RuleConfig } from '../rule-config';

/**
 * Require template literals instead of string concatenation.
 *
 * @see [prefer-template](https://eslint.org/docs/rules/prefer-template)
 */
export type PreferTemplateRuleConfig = RuleConfig<[]>;

/**
 * Require template literals instead of string concatenation.
 *
 * @see [prefer-template](https://eslint.org/docs/rules/prefer-template)
 */
export interface PreferTemplateRule {
  /**
   * Require template literals instead of string concatenation.
   *
   * @see [prefer-template](https://eslint.org/docs/rules/prefer-template)
   */
  'prefer-template': PreferTemplateRuleConfig;
}
