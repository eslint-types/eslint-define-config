import type { RuleConfig } from '../rule-config';

/**
 * Require control the display of the content inside `<transition>`.
 *
 * @see [require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
 */
export type RequireToggleInsideTransitionRuleConfig = RuleConfig<[]>;

/**
 * Require control the display of the content inside `<transition>`.
 *
 * @see [require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
 */
export interface RequireToggleInsideTransitionRule {
  /**
   * Require control the display of the content inside `<transition>`.
   *
   * @see [require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
   */
  'vue/require-toggle-inside-transition': RequireToggleInsideTransitionRuleConfig;
}
