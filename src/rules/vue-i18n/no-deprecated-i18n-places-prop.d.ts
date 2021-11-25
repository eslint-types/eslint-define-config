import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `places` prop (Removed in Vue I18n 9.0.0+).
 *
 *
 */
export type NoDeprecatedI18nPlacesPropRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `places` prop (Removed in Vue I18n 9.0.0+).
 *
 *
 */
export interface NoDeprecatedI18nPlacesPropRule {
  /**
   * Disallow using deprecated `places` prop (Removed in Vue I18n 9.0.0+).
   *
   *
   */
  '@intlify/vue-i18n/no-deprecated-i18n-places-prop': NoDeprecatedI18nPlacesPropRuleConfig;
}
