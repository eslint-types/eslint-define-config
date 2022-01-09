import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireExplicitEmitsOption {
  allowProps?: boolean;
}

/**
 * Options.
 */
export type RequireExplicitEmitsOptions = [RequireExplicitEmitsOption?];

/**
 * Require `emits` option with name triggered by `$emit()`.
 *
 * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
 */
export type RequireExplicitEmitsRuleConfig =
  RuleConfig<RequireExplicitEmitsOptions>;

/**
 * Require `emits` option with name triggered by `$emit()`.
 *
 * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
 */
export interface RequireExplicitEmitsRule {
  /**
   * Require `emits` option with name triggered by `$emit()`.
   *
   * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
   */
  'vue/require-explicit-emits': RequireExplicitEmitsRuleConfig;
}
