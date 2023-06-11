import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortImportsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
  groups?: any[];
  'internal-pattern'?: any[];
  'newlines-between'?: 'ignore' | 'always' | 'never';
  'read-tsconfig'?: boolean;
}

/**
 * Options.
 */
export type SortImportsOptions = [SortImportsOption?];

/**
 * Enforce sorted imports.
 *
 * @see [sort-imports](https://eslint-plugin-perfectionist.azat.io/rules/sort-imports)
 */
export type SortImportsRuleConfig = RuleConfig<SortImportsOptions>;

/**
 * Enforce sorted imports.
 *
 * @see [sort-imports](https://eslint-plugin-perfectionist.azat.io/rules/sort-imports)
 */
export interface SortImportsRule {
  /**
   * Enforce sorted imports.
   *
   * @see [sort-imports](https://eslint-plugin-perfectionist.azat.io/rules/sort-imports)
   */
  'perfectionist/sort-imports': SortImportsRuleConfig;
}
