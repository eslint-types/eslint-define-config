import type { RuleConfig } from '../rule-config';

/**
 * enforce component API style
 *
 * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
 */
export type ComponentApiStyleRuleConfig = RuleConfig<[]>;

/**
 * enforce component API style
 *
 * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
 */
export interface ComponentApiStyleRule {
  /**
   * enforce component API style
   *
   * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
   */
  'vue/component-api-style': ComponentApiStyleRuleConfig;
}
