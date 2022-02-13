import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `places` prop (Removed in Vue I18n 9.0.0+).
 *
 * @see [no-deprecated-i18n-places-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html)
 */
export type NoDeprecatedI18nPlacesPropRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `places` prop (Removed in Vue I18n 9.0.0+).
 *
 * @see [no-deprecated-i18n-places-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html)
 */
export interface NoDeprecatedI18nPlacesPropRule {
  /**
   * Disallow using deprecated `places` prop (Removed in Vue I18n 9.0.0+).
   *
   * @see [no-deprecated-i18n-places-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html)
   */
  '@intlify/vue-i18n/no-deprecated-i18n-places-prop': NoDeprecatedI18nPlacesPropRuleConfig;
}
