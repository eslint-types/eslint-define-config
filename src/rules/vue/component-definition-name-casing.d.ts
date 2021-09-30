import type { RuleConfig } from '../rule-config';

/**
 * Enforce specific casing for component definition name
 *
 * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
 */
export type ComponentDefinitionNameCasingRuleConfig = RuleConfig<[]>;

/**
 * Enforce specific casing for component definition name
 *
 * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
 */
export interface ComponentDefinitionNameCasingRule {
  /**
   * Enforce specific casing for component definition name
   *
   * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
   */
  'vue/component-definition-name-casing': ComponentDefinitionNameCasingRuleConfig;
}
