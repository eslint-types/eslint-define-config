import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ComponentDefinitionNameCasingOption = 'PascalCase' | 'kebab-case';

/**
 * Options.
 */
export type ComponentDefinitionNameCasingOptions = [
  ComponentDefinitionNameCasingOption?,
];

/**
 * Enforce specific casing for component definition name.
 *
 * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
 */
export type ComponentDefinitionNameCasingRuleConfig =
  RuleConfig<ComponentDefinitionNameCasingOptions>;

/**
 * Enforce specific casing for component definition name.
 *
 * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
 */
export interface ComponentDefinitionNameCasingRule {
  /**
   * Enforce specific casing for component definition name.
   *
   * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
   */
  'vue/component-definition-name-casing': ComponentDefinitionNameCasingRuleConfig;
}
