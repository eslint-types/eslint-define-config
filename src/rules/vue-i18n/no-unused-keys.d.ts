import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnusedKeysOption {
  src?: string;
  extensions?: string[];
  ignores?: string[];
  enableFix?: boolean;
}

/**
 * Options.
 */
export type NoUnusedKeysOptions = [NoUnusedKeysOption?];

/**
 * Disallow unused localization keys.
 *
 * @see [no-unused-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unused-keys.html)
 */
export type NoUnusedKeysRuleConfig = RuleConfig<NoUnusedKeysOptions>;

/**
 * Disallow unused localization keys.
 *
 * @see [no-unused-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unused-keys.html)
 */
export interface NoUnusedKeysRule {
  /**
   * Disallow unused localization keys.
   *
   * @see [no-unused-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unused-keys.html)
   */
  '@intlify/vue-i18n/no-unused-keys': NoUnusedKeysRuleConfig;
}
