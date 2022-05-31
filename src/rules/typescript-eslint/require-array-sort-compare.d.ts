import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireArraySortCompareOption {
  ignoreStringArrays?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type RequireArraySortCompareOptions = [RequireArraySortCompareOption?];

/**
 * Require `Array#sort` calls to always provide a `compareFunction`.
 *
 * @see [require-array-sort-compare](https://typescript-eslint.io/rules/require-array-sort-compare)
 */
export type RequireArraySortCompareRuleConfig =
  RuleConfig<RequireArraySortCompareOptions>;

/**
 * Require `Array#sort` calls to always provide a `compareFunction`.
 *
 * @see [require-array-sort-compare](https://typescript-eslint.io/rules/require-array-sort-compare)
 */
export interface RequireArraySortCompareRule {
  /**
   * Require `Array#sort` calls to always provide a `compareFunction`.
   *
   * @see [require-array-sort-compare](https://typescript-eslint.io/rules/require-array-sort-compare)
   */
  '@typescript-eslint/require-array-sort-compare': RequireArraySortCompareRuleConfig;
}
