import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortEnumsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  'ignore-case'?: boolean;
  order?: 'asc' | 'desc';
}

/**
 * Options.
 */
export type SortEnumsOptions = [SortEnumsOption?];

/**
 * Enforce sorted TypeScript enums.
 *
 * @see [sort-enums](https://eslint-plugin-perfectionist.azat.io/rules/sort-enums)
 */
export type SortEnumsRuleConfig = RuleConfig<SortEnumsOptions>;

/**
 * Enforce sorted TypeScript enums.
 *
 * @see [sort-enums](https://eslint-plugin-perfectionist.azat.io/rules/sort-enums)
 */
export interface SortEnumsRule {
  /**
   * Enforce sorted TypeScript enums.
   *
   * @see [sort-enums](https://eslint-plugin-perfectionist.azat.io/rules/sort-enums)
   */
  'perfectionist/sort-enums': SortEnumsRuleConfig;
}
