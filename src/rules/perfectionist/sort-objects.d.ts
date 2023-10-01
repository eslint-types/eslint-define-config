import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortObjectsOption {
  'custom-groups'?: {
    [k: string]: any;
  };
  'partition-by-comment'?: boolean | string | any[];
  'styled-components'?: boolean;
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
  groups?: any[];
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
