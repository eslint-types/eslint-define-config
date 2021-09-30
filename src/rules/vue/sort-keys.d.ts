import type { RuleConfig } from '../rule-config';

/**
 * Enforce sort-keys in a manner that is compatible with order-in-components
 *
 * @see [sort-keys](https://eslint.vuejs.org/rules/sort-keys.html)
 */
export type SortKeysRuleConfig = RuleConfig<[]>;

/**
 * Enforce sort-keys in a manner that is compatible with order-in-components
 *
 * @see [sort-keys](https://eslint.vuejs.org/rules/sort-keys.html)
 */
export interface SortKeysRule {
  /**
   * Enforce sort-keys in a manner that is compatible with order-in-components
   *
   * @see [sort-keys](https://eslint.vuejs.org/rules/sort-keys.html)
   */
  'vue/sort-keys': SortKeysRuleConfig;
}
