import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated the `functional` template (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-functional-template](https://eslint.vuejs.org/rules/no-deprecated-functional-template.html)
 */
export type NoDeprecatedFunctionalTemplateRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated the `functional` template (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-functional-template](https://eslint.vuejs.org/rules/no-deprecated-functional-template.html)
 */
export interface NoDeprecatedFunctionalTemplateRule {
  /**
   * Disallow using deprecated the `functional` template (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-functional-template](https://eslint.vuejs.org/rules/no-deprecated-functional-template.html)
   */
  'vue/no-deprecated-functional-template': NoDeprecatedFunctionalTemplateRuleConfig;
}
