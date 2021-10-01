import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface SortKeysConfig {
  caseSensitive?: boolean;
  ignoreChildrenOf?: any[];
  ignoreGrandchildrenOf?: any[];
  minKeys?: number;
  natural?: boolean;
  runOutsideVue?: boolean;
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
 * Enforce sort-keys in a manner that is compatible with order-in-components.
 *
 * @see [sort-keys](https://eslint.vuejs.org/rules/sort-keys.html)
 */
export type SortKeysRuleConfig = RuleConfig<SortKeysOptions>;

/**
 * Enforce sort-keys in a manner that is compatible with order-in-components.
 *
 * @see [sort-keys](https://eslint.vuejs.org/rules/sort-keys.html)
 */
export interface SortKeysRule {
  /**
   * Enforce sort-keys in a manner that is compatible with order-in-components.
   *
   * @see [sort-keys](https://eslint.vuejs.org/rules/sort-keys.html)
   */
  'vue/sort-keys': SortKeysRuleConfig;
}
