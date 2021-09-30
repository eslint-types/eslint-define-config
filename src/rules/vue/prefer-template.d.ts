import type { RuleConfig } from '../rule-config';

/**
 * require template literals instead of string concatenation
 *
 * @see [prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)
 */
export type PreferTemplateRuleConfig = RuleConfig<[]>;

/**
 * require template literals instead of string concatenation
 *
 * @see [prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)
 */
export interface PreferTemplateRule {
  /**
   * require template literals instead of string concatenation
   *
   * @see [prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)
   */
  'vue/prefer-template': PreferTemplateRuleConfig;
}
