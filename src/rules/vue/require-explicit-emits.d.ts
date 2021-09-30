import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireExplicitEmitsOption = {
  /**
   * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
   */
  allowProps?: any;
};

/**
 * Options.
 */
export type RequireExplicitEmitsOptions = [RequireExplicitEmitsOption?];

/**
 * require `emits` option with name triggered by `$emit()`
 *
 * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
 */
export type RequireExplicitEmitsRuleConfig = RuleConfig<RequireExplicitEmitsOptions>;

/**
 * require `emits` option with name triggered by `$emit()`
 *
 * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
 */
export interface RequireExplicitEmitsRule {
  /**
   * require `emits` option with name triggered by `$emit()`
   *
   * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
   */
  'vue/require-explicit-emits': RequireExplicitEmitsRuleConfig;
}
