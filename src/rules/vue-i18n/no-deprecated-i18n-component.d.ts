import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `<i18n>` components (in Vue I18n 9.0.0+).
 *
 *
 */
export type NoDeprecatedI18nComponentRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `<i18n>` components (in Vue I18n 9.0.0+).
 *
 *
 */
export interface NoDeprecatedI18nComponentRule {
  /**
   * Disallow using deprecated `<i18n>` components (in Vue I18n 9.0.0+).
   *
   *
   */
  '@intlify/vue-i18n/no-deprecated-i18n-component': NoDeprecatedI18nComponentRuleConfig;
}
