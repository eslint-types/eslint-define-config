import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortObjectsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
  'always-on-top'?: any[];
}

/**
 * Options.
 */
export type SortObjectsOptions = [SortObjectsOption?];

/**
 * Enforce sorted objects.
 *
 * @see [sort-objects](https://eslint-plugin-perfectionist.azat.io/rules/sort-objects)
 */
export type SortObjectsRuleConfig = RuleConfig<SortObjectsOptions>;

/**
 * Enforce sorted objects.
 *
 * @see [sort-objects](https://eslint-plugin-perfectionist.azat.io/rules/sort-objects)
 */
export interface SortObjectsRule {
  /**
   * Enforce sorted objects.
   *
   * @see [sort-objects](https://eslint-plugin-perfectionist.azat.io/rules/sort-objects)
   */
  'perfectionist/sort-objects': SortObjectsRuleConfig;
}
