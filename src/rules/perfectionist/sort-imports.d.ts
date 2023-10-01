import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortImportsOption {
  'custom-groups'?: {
    type?: {
      [k: string]: any;
    };
    value?: {
      [k: string]: any;
    };
  };
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
  groups?: any[];
  'internal-pattern'?: string[];
  'newlines-between'?: 'ignore' | 'always' | 'never';
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
