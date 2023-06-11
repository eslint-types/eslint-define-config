import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortNamedExportsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
}

/**
 * Options.
 */
export type SortNamedExportsOptions = [SortNamedExportsOption?];

/**
 * Enforce sorted named exports.
 *
 * @see [sort-named-exports](https://eslint-plugin-perfectionist.azat.io/rules/sort-named-exports)
 */
export type SortNamedExportsRuleConfig = RuleConfig<SortNamedExportsOptions>;

/**
 * Enforce sorted named exports.
 *
 * @see [sort-named-exports](https://eslint-plugin-perfectionist.azat.io/rules/sort-named-exports)
 */
export interface SortNamedExportsRule {
  /**
   * Enforce sorted named exports.
   *
   * @see [sort-named-exports](https://eslint-plugin-perfectionist.azat.io/rules/sort-named-exports)
   */
  'perfectionist/sort-named-exports': SortNamedExportsRuleConfig;
}
