import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireArraySortCompareOption {
  /**
   * Whether to ignore arrays in which all elements are strings.
   */
  ignoreStringArrays?: boolean;
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
