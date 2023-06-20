import type { RuleConfig } from '../rule-config';

/**
 * Disallow sparse arrays.
 *
 * @see [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)
 */
export type NoSparseArraysRuleConfig = RuleConfig<[]>;

/**
 * Disallow sparse arrays.
 *
 * @see [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)
 */
export interface NoSparseArraysRule {
  /**
   * Disallow sparse arrays.
   *
   * @see [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)
   */
  'no-sparse-arrays': NoSparseArraysRuleConfig;
}
