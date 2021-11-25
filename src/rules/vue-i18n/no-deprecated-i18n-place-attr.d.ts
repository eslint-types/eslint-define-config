import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `place` attribute (Removed in Vue I18n 9.0.0+).
 *
 *
 */
export type NoDeprecatedI18nPlaceAttrRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `place` attribute (Removed in Vue I18n 9.0.0+).
 *
 *
 */
export interface NoDeprecatedI18nPlaceAttrRule {
  /**
   * Disallow using deprecated `place` attribute (Removed in Vue I18n 9.0.0+).
   *
   *
   */
  '@intlify/vue-i18n/no-deprecated-i18n-place-attr': NoDeprecatedI18nPlaceAttrRuleConfig;
}
