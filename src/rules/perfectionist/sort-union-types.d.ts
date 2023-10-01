import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortUnionTypesOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
  'nullable-last'?: boolean;
}

/**
 * Options.
 */
export type SortUnionTypesOptions = [SortUnionTypesOption?];

/**
 * Enforce sorted union types.
 *
 * @see [sort-union-types](https://eslint-plugin-perfectionist.azat.io/rules/sort-union-types)
 */
export type SortUnionTypesRuleConfig = RuleConfig<SortUnionTypesOptions>;

/**
 * Enforce sorted union types.
 *
 * @see [sort-union-types](https://eslint-plugin-perfectionist.azat.io/rules/sort-union-types)
 */
export interface SortUnionTypesRule {
  /**
   * Enforce sorted union types.
   *
   * @see [sort-union-types](https://eslint-plugin-perfectionist.azat.io/rules/sort-union-types)
   */
  'perfectionist/sort-union-types': SortUnionTypesRuleConfig;
}
