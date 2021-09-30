import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CommaStyleOption = 'first' | 'last';

/**
 * Options.
 */
export type CommaStyleOptions = [CommaStyleOption?];

/**
 * Enforce consistent comma style
 *
 * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
 */
export type CommaStyleRuleConfig = RuleConfig<CommaStyleOptions>;

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
