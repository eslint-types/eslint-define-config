import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoReservedKeysOption {
  reserved?: any[];
  groups?: any[];
}

/**
 * Options.
 */
export type NoReservedKeysOptions = [NoReservedKeysOption?];

/**
 * Disallow overwriting reserved keys.
 *
 * @see [no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)
 */
export type NoReservedKeysRuleConfig = RuleConfig<NoReservedKeysOptions>;

/**
 * Disallow overwriting reserved keys.
 *
 * @see [no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)
 */
export interface NoReservedKeysRule {
  /**
   * Disallow overwriting reserved keys.
   *
   * @see [no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)
   */
  'vue/no-reserved-keys': NoReservedKeysRuleConfig;
}
