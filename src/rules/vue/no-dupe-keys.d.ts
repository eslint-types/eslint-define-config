import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDupeKeysOption {
  groups?: any[];
}

/**
 * Options.
 */
export type NoDupeKeysOptions = [NoDupeKeysOption?];

/**
 * Disallow duplication of field names.
 *
 * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
 */
export type NoDupeKeysRuleConfig = RuleConfig<NoDupeKeysOptions>;

/**
 * Disallow duplication of field names.
 *
 * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
 */
export interface NoDupeKeysRule {
  /**
   * Disallow duplication of field names.
   *
   * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
   */
  'vue/no-dupe-keys': NoDupeKeysRuleConfig;
}
