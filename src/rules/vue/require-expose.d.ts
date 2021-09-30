import type { RuleConfig } from '../rule-config';

/**
 * require declare public properties using `expose`
 *
 * @see [require-expose](https://eslint.vuejs.org/rules/require-expose.html)
 */
export type RequireExposeRuleConfig = RuleConfig<[]>;

/**
 * require declare public properties using `expose`
 *
 * @see [require-expose](https://eslint.vuejs.org/rules/require-expose.html)
 */
export interface RequireExposeRule {
  /**
   * require declare public properties using `expose`
   *
   * @see [require-expose](https://eslint.vuejs.org/rules/require-expose.html)
   */
  'vue/require-expose': RequireExposeRuleConfig;
}
