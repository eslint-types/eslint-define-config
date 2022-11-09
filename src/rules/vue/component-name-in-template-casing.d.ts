import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ComponentNameInTemplateCasingConfig {
  globals?: string[];
  ignores?: string[];
  registeredComponentsOnly?: boolean;
}

/**
 * Option.
 */
export type ComponentNameInTemplateCasingOption = 'PascalCase' | 'kebab-case';

/**
 * Options.
 */
export type ComponentNameInTemplateCasingOptions = [
  ComponentNameInTemplateCasingOption?,
  ComponentNameInTemplateCasingConfig?,
];

/**
 * Enforce specific casing for the component naming style in template.
 *
 * @see [component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)
 */
export type ComponentNameInTemplateCasingRuleConfig =
  RuleConfig<ComponentNameInTemplateCasingOptions>;

/**
 * Enforce specific casing for the component naming style in template.
 *
 * @see [component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)
 */
export interface ComponentNameInTemplateCasingRule {
  /**
   * Enforce specific casing for the component naming style in template.
   *
   * @see [component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)
   */
  'vue/component-name-in-template-casing': ComponentNameInTemplateCasingRuleConfig;
}
