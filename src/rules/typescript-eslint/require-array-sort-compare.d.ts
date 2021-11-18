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
 * Requires `Array#sort` calls to always provide a `compareFunction`.
 *
 * @see [require-array-sort-compare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md)
 */
export type RequireArraySortCompareRuleConfig = RuleConfig<RequireArraySortCompareOptions>;

/**
 * Requires `Array#sort` calls to always provide a `compareFunction`.
 *
 * @see [require-array-sort-compare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md)
 */
export interface RequireArraySortCompareRule {
  /**
   * Requires `Array#sort` calls to always provide a `compareFunction`.
   *
   * @see [require-array-sort-compare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md)
   */
  '@typescript-eslint/require-array-sort-compare': RequireArraySortCompareRuleConfig;
}
