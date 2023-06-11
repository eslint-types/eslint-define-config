import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortMapElementsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
}

/**
 * Options.
 */
export type SortMapElementsOptions = [SortMapElementsOption?];

/**
 * Enforce sorted Map elements.
 *
 * @see [sort-map-elements](https://eslint-plugin-perfectionist.azat.io/rules/sort-map-elements)
 */
export type SortMapElementsRuleConfig = RuleConfig<SortMapElementsOptions>;

/**
 * Enforce sorted Map elements.
 *
 * @see [sort-map-elements](https://eslint-plugin-perfectionist.azat.io/rules/sort-map-elements)
 */
export interface SortMapElementsRule {
  /**
   * Enforce sorted Map elements.
   *
   * @see [sort-map-elements](https://eslint-plugin-perfectionist.azat.io/rules/sort-map-elements)
   */
  'perfectionist/sort-map-elements': SortMapElementsRuleConfig;
}
