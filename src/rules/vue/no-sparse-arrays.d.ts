import type { RuleConfig } from '../rule-config';

/**
 * disallow sparse arrays
 *
 * @see [no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html)
 */
export type NoSparseArraysRuleConfig = RuleConfig<[]>;

/**
 * disallow sparse arrays
 *
 * @see [no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html)
 */
export interface NoSparseArraysRule {
  /**
   * disallow sparse arrays
   *
   * @see [no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html)
   */
  'vue/no-sparse-arrays': NoSparseArraysRuleConfig;
}
