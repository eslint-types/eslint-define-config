import type { RuleConfig } from '../rule-config';

/**
 * Require `ref` and `shallowRef` functions to be strongly typed.
 *
 * @see [require-typed-ref](https://eslint.vuejs.org/rules/require-typed-ref.html)
 */
export type RequireTypedRefRuleConfig = RuleConfig<[]>;

/**
 * Require `ref` and `shallowRef` functions to be strongly typed.
 *
 * @see [require-typed-ref](https://eslint.vuejs.org/rules/require-typed-ref.html)
 */
export interface RequireTypedRefRule {
  /**
   * Require `ref` and `shallowRef` functions to be strongly typed.
   *
   * @see [require-typed-ref](https://eslint.vuejs.org/rules/require-typed-ref.html)
   */
  'vue/require-typed-ref': RequireTypedRefRuleConfig;
}
