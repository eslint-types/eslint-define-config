import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMissingKeysInOtherLocalesOption {
  ignoreLocales?: string[];
}

/**
 * Options.
 */
export type NoMissingKeysInOtherLocalesOptions = [NoMissingKeysInOtherLocalesOption?];

/**
 * Disallow missing locale message keys in other locales.
 *
 *
 */
export type NoMissingKeysInOtherLocalesRuleConfig = RuleConfig<NoMissingKeysInOtherLocalesOptions>;

/**
 * Disallow missing locale message keys in other locales.
 *
 *
 */
export interface NoMissingKeysInOtherLocalesRule {
  /**
   * Disallow missing locale message keys in other locales.
   *
   *
   */
  '@intlify/vue-i18n/no-missing-keys-in-other-locales': NoMissingKeysInOtherLocalesRuleConfig;
}
