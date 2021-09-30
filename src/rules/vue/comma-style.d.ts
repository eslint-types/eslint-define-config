import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent comma style
 *
 * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
 */
export type CommaStyleRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent comma style
 *
 * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
 */
export interface CommaStyleRule {
  /**
   * enforce consistent comma style
   *
   * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
   */
  'vue/comma-style': CommaStyleRuleConfig;
}
