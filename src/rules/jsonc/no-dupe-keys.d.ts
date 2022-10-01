import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate keys in object literals.
 *
 * @see [no-dupe-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html)
 */
export type NoDupeKeysRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate keys in object literals.
 *
 * @see [no-dupe-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html)
 */
export interface NoDupeKeysRule {
  /**
   * Disallow duplicate keys in object literals.
   *
   * @see [no-dupe-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html)
   */
  'jsonc/no-dupe-keys': NoDupeKeysRuleConfig;
}
