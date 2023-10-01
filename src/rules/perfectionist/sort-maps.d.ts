import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortMapsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
}

/**
 * Options.
 */
export type SortMapsOptions = [SortMapsOption?];

/**
 * Enforce sorted Map elements.
 *
 * @see [sort-maps](https://eslint-plugin-perfectionist.azat.io/rules/sort-maps)
 */
export type SortMapsRuleConfig = RuleConfig<SortMapsOptions>;

/**
 * Enforce sorted Map elements.
 *
 * @see [sort-maps](https://eslint-plugin-perfectionist.azat.io/rules/sort-maps)
 */
export interface SortMapsRule {
  /**
   * Enforce sorted Map elements.
   *
   * @see [sort-maps](https://eslint-plugin-perfectionist.azat.io/rules/sort-maps)
   */
  'perfectionist/sort-maps': SortMapsRuleConfig;
}
