import type { RuleConfig } from '../rule-config';

/**
 * enforce specific casing for component definition name
 *
 * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
 */
export type ComponentDefinitionNameCasingRuleConfig = RuleConfig<[]>;

/**
 * enforce specific casing for component definition name
 *
 * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
 */
export interface ComponentDefinitionNameCasingRule {
  /**
   * enforce specific casing for component definition name
   *
   * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
   */
  'vue/component-definition-name-casing': ComponentDefinitionNameCasingRuleConfig;
}
