import type { RuleConfig } from '../rule-config';

/**
 * Disallow sparse arrays.
 *
 * @see [no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html)
 */
export type NoSparseArraysRuleConfig = RuleConfig<[]>;

/**
 * Disallow sparse arrays.
 *
 * @see [no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html)
 */
export interface NoSparseArraysRule {
  /**
   * Disallow sparse arrays.
   *
   * @see [no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html)
   */
  'vue/no-sparse-arrays': NoSparseArraysRuleConfig;
}
