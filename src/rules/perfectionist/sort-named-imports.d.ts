import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortNamedImportsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
}

/**
 * Options.
 */
export type SortNamedImportsOptions = [SortNamedImportsOption?];

/**
 * Enforce sorted named imports.
 *
 * @see [sort-named-imports](https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports)
 */
export type SortNamedImportsRuleConfig = RuleConfig<SortNamedImportsOptions>;

/**
 * Enforce sorted named imports.
 *
 * @see [sort-named-imports](https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports)
 */
export interface SortNamedImportsRule {
  /**
   * Enforce sorted named imports.
   *
   * @see [sort-named-imports](https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports)
   */
  'perfectionist/sort-named-imports': SortNamedImportsRuleConfig;
}
