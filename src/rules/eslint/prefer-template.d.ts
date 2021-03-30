import type { RuleConfig } from '../rule-config';

/**
 * Suggest using template literals instead of string concatenation.
 *
 * @see [prefer-template](https://eslint.org/docs/rules/prefer-template)
 */
export type PreferTemplateRuleConfig = RuleConfig<[]>;

/**
 * Suggest using template literals instead of string concatenation.
 *
 * @see [prefer-template](https://eslint.org/docs/rules/prefer-template)
 */
export interface PreferTemplateRule {
  /**
   * Suggest using template literals instead of string concatenation.
   *
   * @see [prefer-template](https://eslint.org/docs/rules/prefer-template)
   */
  'prefer-template': PreferTemplateRuleConfig;
}
