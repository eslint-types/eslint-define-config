import type { RuleConfig } from '../rule-config';

/**
 * Enforce specific casing for the component naming style in template
 *
 * @see [component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)
 */
export type ComponentNameInTemplateCasingRuleConfig = RuleConfig<[]>;

/**
 * Enforce specific casing for the component naming style in template
 *
 * @see [component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)
 */
export interface ComponentNameInTemplateCasingRule {
  /**
   * Enforce specific casing for the component naming style in template
   *
   * @see [component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)
   */
  'vue/component-name-in-template-casing': ComponentNameInTemplateCasingRuleConfig;
}
