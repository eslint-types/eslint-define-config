import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 1
 */
export type ComponentApiStyleOption = [
  'script-setup' | 'composition' | 'composition-vue2' | 'options',
  ...('script-setup' | 'composition' | 'composition-vue2' | 'options')[],
];

/**
 * Options.
 */
export type ComponentApiStyleOptions = [ComponentApiStyleOption?];

/**
 * Enforce component API style.
 *
 * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
 */
export type ComponentApiStyleRuleConfig = RuleConfig<ComponentApiStyleOptions>;

/**
 * Enforce component API style.
 *
 * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
 */
export interface ComponentApiStyleRule {
  /**
   * Enforce component API style.
   *
   * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
   */
  'vue/component-api-style': ComponentApiStyleRuleConfig;
}
