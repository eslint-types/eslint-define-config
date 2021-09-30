import type { RuleConfig } from '../rule-config';

/**
 * Enforce component API style
 *
 * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
 */
export type ComponentApiStyleRuleConfig = RuleConfig<[]>;

/**
 * Enforce component API style
 *
 * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
 */
export interface ComponentApiStyleRule {
  /**
   * Enforce component API style
   *
   * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
   */
  'vue/component-api-style': ComponentApiStyleRuleConfig;
}
