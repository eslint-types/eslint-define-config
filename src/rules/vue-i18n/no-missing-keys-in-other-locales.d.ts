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
export type NoMissingKeysInOtherLocalesOptions = [
  NoMissingKeysInOtherLocalesOption?,
];

/**
 * Disallow missing locale message keys in other locales.
 *
 * @see [no-missing-keys-in-other-locales](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys-in-other-locales.html)
 */
export type NoMissingKeysInOtherLocalesRuleConfig =
  RuleConfig<NoMissingKeysInOtherLocalesOptions>;

/**
 * Disallow missing locale message keys in other locales.
 *
 * @see [no-missing-keys-in-other-locales](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys-in-other-locales.html)
 */
export interface NoMissingKeysInOtherLocalesRule {
  /**
   * Disallow missing locale message keys in other locales.
   *
   * @see [no-missing-keys-in-other-locales](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys-in-other-locales.html)
   */
  '@intlify/vue-i18n/no-missing-keys-in-other-locales': NoMissingKeysInOtherLocalesRuleConfig;
}
