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
 *
 */
export type NoDuplicateKeysInLocaleRuleConfig = RuleConfig<NoDuplicateKeysInLocaleOptions>;

/**
 * Disallow duplicate localization keys within the same locale.
 *
 *
 */
export interface NoDuplicateKeysInLocaleRule {
  /**
   * Disallow duplicate localization keys within the same locale.
   *
   *
   */
  '@intlify/vue-i18n/no-duplicate-keys-in-locale': NoDuplicateKeysInLocaleRuleConfig;
}
