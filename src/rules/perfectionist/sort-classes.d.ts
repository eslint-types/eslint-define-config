import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortClassesOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  'ignore-case'?: boolean;
  order?: 'asc' | 'desc';
  groups?: any[];
}

/**
 * Options.
 */
export type SortClassesOptions = [SortClassesOption?];

/**
 * Enforce sorted classes.
 *
 * @see [sort-classes](https://eslint-plugin-perfectionist.azat.io/rules/sort-classes)
 */
export type SortClassesRuleConfig = RuleConfig<SortClassesOptions>;

/**
 * Enforce sorted classes.
 *
 * @see [sort-classes](https://eslint-plugin-perfectionist.azat.io/rules/sort-classes)
 */
export interface SortClassesRule {
  /**
   * Enforce sorted classes.
   *
   * @see [sort-classes](https://eslint-plugin-perfectionist.azat.io/rules/sort-classes)
   */
  'perfectionist/sort-classes': SortClassesRuleConfig;
}
