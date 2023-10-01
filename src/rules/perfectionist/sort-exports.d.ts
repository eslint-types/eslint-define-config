import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortExportsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
}

/**
 * Options.
 */
export type SortExportsOptions = [SortExportsOption?];

/**
 * Enforce sorted exports.
 *
 * @see [sort-exports](https://eslint-plugin-perfectionist.azat.io/rules/sort-exports)
 */
export type SortExportsRuleConfig = RuleConfig<SortExportsOptions>;

/**
 * Enforce sorted exports.
 *
 * @see [sort-exports](https://eslint-plugin-perfectionist.azat.io/rules/sort-exports)
 */
export interface SortExportsRule {
  /**
   * Enforce sorted exports.
   *
   * @see [sort-exports](https://eslint-plugin-perfectionist.azat.io/rules/sort-exports)
   */
  'perfectionist/sort-exports': SortExportsRuleConfig;
}
