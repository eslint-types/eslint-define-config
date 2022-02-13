import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `<i18n>` components (in Vue I18n 9.0.0+).
 *
 * @see [no-deprecated-i18n-component](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html)
 */
export type NoDeprecatedI18nComponentRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `<i18n>` components (in Vue I18n 9.0.0+).
 *
 * @see [no-deprecated-i18n-component](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html)
 */
export interface NoDeprecatedI18nComponentRule {
  /**
   * Disallow using deprecated `<i18n>` components (in Vue I18n 9.0.0+).
   *
   * @see [no-deprecated-i18n-component](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html)
   */
  '@intlify/vue-i18n/no-deprecated-i18n-component': NoDeprecatedI18nComponentRuleConfig;
}
