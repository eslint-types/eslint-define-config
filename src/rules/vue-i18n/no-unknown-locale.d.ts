import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnknownLocaleOption {
  locales?: string[];
  disableRFC5646?: boolean;
}

/**
 * Options.
 */
export type NoUnknownLocaleOptions = [NoUnknownLocaleOption?];

/**
 * Disallow unknown locale name.
 *
 * @see [no-unknown-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unknown-locale.html)
 */
export type NoUnknownLocaleRuleConfig = RuleConfig<NoUnknownLocaleOptions>;

/**
 * Disallow unknown locale name.
 *
 * @see [no-unknown-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unknown-locale.html)
 */
export interface NoUnknownLocaleRule {
  /**
   * Disallow unknown locale name.
   *
   * @see [no-unknown-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unknown-locale.html)
   */
  '@intlify/vue-i18n/no-unknown-locale': NoUnknownLocaleRuleConfig;
}
