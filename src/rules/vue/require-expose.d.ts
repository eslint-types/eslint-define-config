import type { RuleConfig } from '../rule-config';

/**
 * Require declare public properties using `expose`.
 *
 * @see [require-expose](https://eslint.vuejs.org/rules/require-expose.html)
 */
export type RequireExposeRuleConfig = RuleConfig<[]>;

/**
 * Require declare public properties using `expose`.
 *
 * @see [require-expose](https://eslint.vuejs.org/rules/require-expose.html)
 */
export interface RequireExposeRule {
  /**
   * Require declare public properties using `expose`.
   *
   * @see [require-expose](https://eslint.vuejs.org/rules/require-expose.html)
   */
  'vue/require-expose': RequireExposeRuleConfig;
}
