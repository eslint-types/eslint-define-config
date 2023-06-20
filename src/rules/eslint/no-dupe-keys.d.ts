import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate keys in object literals.
 *
 * @see [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)
 */
export type NoDupeKeysRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate keys in object literals.
 *
 * @see [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)
 */
export interface NoDupeKeysRule {
  /**
   * Disallow duplicate keys in object literals.
   *
   * @see [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)
   */
  'no-dupe-keys': NoDupeKeysRuleConfig;
}
