import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `place` attribute (Removed in Vue I18n 9.0.0+).
 *
 * @see [no-deprecated-i18n-place-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-place-attr.html)
 */
export type NoDeprecatedI18nPlaceAttrRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `place` attribute (Removed in Vue I18n 9.0.0+).
 *
 * @see [no-deprecated-i18n-place-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-place-attr.html)
 */
export interface NoDeprecatedI18nPlaceAttrRule {
  /**
   * Disallow using deprecated `place` attribute (Removed in Vue I18n 9.0.0+).
   *
   * @see [no-deprecated-i18n-place-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-place-attr.html)
   */
  '@intlify/vue-i18n/no-deprecated-i18n-place-attr': NoDeprecatedI18nPlaceAttrRuleConfig;
}
