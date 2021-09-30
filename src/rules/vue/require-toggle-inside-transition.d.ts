import type { RuleConfig } from '../rule-config';

/**
 * require control the display of the content inside `<transition>`
 *
 * @see [require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
 */
export type RequireToggleInsideTransitionRuleConfig = RuleConfig<[]>;

/**
 * require control the display of the content inside `<transition>`
 *
 * @see [require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
 */
export interface RequireToggleInsideTransitionRule {
  /**
   * require control the display of the content inside `<transition>`
   *
   * @see [require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
   */
  'vue/require-toggle-inside-transition': RequireToggleInsideTransitionRuleConfig;
}
