import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface SortKeysConfig {
  caseSensitive?: boolean;
  natural?: boolean;
  minKeys?: number;
}

/**
 * Option.
 */
export type SortKeysOption = 'asc' | 'desc';

/**
 * Options.
 */
export type SortKeysOptions = [SortKeysOption?, SortKeysConfig?];

/**
 * Require object keys to be sorted.
 *
 * @see [sort-keys](https://eslint.org/docs/rules/sort-keys)
 */
export type SortKeysRuleConfig = RuleConfig<SortKeysOptions>;

/**
 * Require object keys to be sorted.
 *
 * @see [sort-keys](https://eslint.org/docs/rules/sort-keys)
 */
export interface SortKeysRule {
  /**
   * Require object keys to be sorted.
   *
   * @see [sort-keys](https://eslint.org/docs/rules/sort-keys)
   */
  'sort-keys': SortKeysRuleConfig;
}
