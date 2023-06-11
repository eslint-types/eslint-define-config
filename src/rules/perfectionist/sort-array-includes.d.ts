import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortArrayIncludesOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
  'spread-last'?: boolean;
}

/**
 * Options.
 */
export type SortArrayIncludesOptions = [SortArrayIncludesOption?];

/**
 * Enforce sorted arrays before include method.
 *
 * @see [sort-array-includes](https://eslint-plugin-perfectionist.azat.io/rules/sort-array-includes)
 */
export type SortArrayIncludesRuleConfig = RuleConfig<SortArrayIncludesOptions>;

/**
 * Enforce sorted arrays before include method.
 *
 * @see [sort-array-includes](https://eslint-plugin-perfectionist.azat.io/rules/sort-array-includes)
 */
export interface SortArrayIncludesRule {
  /**
   * Enforce sorted arrays before include method.
   *
   * @see [sort-array-includes](https://eslint-plugin-perfectionist.azat.io/rules/sort-array-includes)
   */
  'perfectionist/sort-array-includes': SortArrayIncludesRuleConfig;
}
