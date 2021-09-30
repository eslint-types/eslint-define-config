import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoDupeKeysOption = {
  /**
   * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
   */
  groups?: any;
};

/**
 * Options.
 */
export type NoDupeKeysOptions = [NoDupeKeysOption?];

/**
 * disallow duplication of field names
 *
 * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
 */
export type NoDupeKeysRuleConfig = RuleConfig<NoDupeKeysOptions>;

/**
 * disallow duplication of field names
 *
 * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
 */
export interface NoDupeKeysRule {
  /**
   * disallow duplication of field names
   *
   * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
   */
  'vue/no-dupe-keys': NoDupeKeysRuleConfig;
}
