import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDuplicateKeysInLocaleOption {
  ignoreI18nBlock?: boolean;
}

/**
 * Options.
 */
export type NoDuplicateKeysInLocaleOptions = [NoDuplicateKeysInLocaleOption?];

/**
 * Disallow duplicate localization keys within the same locale.
 *
 * @see [no-duplicate-keys-in-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-duplicate-keys-in-locale.html)
 */
export type NoDuplicateKeysInLocaleRuleConfig =
  RuleConfig<NoDuplicateKeysInLocaleOptions>;

/**
 * Disallow duplicate localization keys within the same locale.
 *
 * @see [no-duplicate-keys-in-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-duplicate-keys-in-locale.html)
 */
export interface NoDuplicateKeysInLocaleRule {
  /**
   * Disallow duplicate localization keys within the same locale.
   *
   * @see [no-duplicate-keys-in-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-duplicate-keys-in-locale.html)
   */
  '@intlify/vue-i18n/no-duplicate-keys-in-locale': NoDuplicateKeysInLocaleRuleConfig;
}
