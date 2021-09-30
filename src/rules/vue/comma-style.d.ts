import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent comma style
 *
 * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
 */
export type CommaStyleRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent comma style
 *
 * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
 */
export interface CommaStyleRule {
  /**
   * Enforce consistent comma style
   *
   * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
   */
  'vue/comma-style': CommaStyleRuleConfig;
}
