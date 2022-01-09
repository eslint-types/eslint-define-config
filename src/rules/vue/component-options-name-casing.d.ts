import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ComponentOptionsNameCasingOption =
  | 'camelCase'
  | 'kebab-case'
  | 'PascalCase';

/**
 * Options.
 */
export type ComponentOptionsNameCasingOptions = [
  ComponentOptionsNameCasingOption?,
];

/**
 * Enforce the casing of component name in `components` options.
 *
 * @see [component-options-name-casing](https://eslint.vuejs.org/rules/component-options-name-casing.html)
 */
export type ComponentOptionsNameCasingRuleConfig =
  RuleConfig<ComponentOptionsNameCasingOptions>;

/**
 * Enforce the casing of component name in `components` options.
 *
 * @see [component-options-name-casing](https://eslint.vuejs.org/rules/component-options-name-casing.html)
 */
export interface ComponentOptionsNameCasingRule {
  /**
   * Enforce the casing of component name in `components` options.
   *
   * @see [component-options-name-casing](https://eslint.vuejs.org/rules/component-options-name-casing.html)
   */
  'vue/component-options-name-casing': ComponentOptionsNameCasingRuleConfig;
}
