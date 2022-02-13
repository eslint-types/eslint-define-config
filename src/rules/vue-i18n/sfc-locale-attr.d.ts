import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SfcLocaleAttrOption = 'always' | 'never';

/**
 * Options.
 */
export type SfcLocaleAttrOptions = [SfcLocaleAttrOption?];

/**
 * Require or disallow the locale attribute on `<i18n>` block.
 *
 * @see [sfc-locale-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/sfc-locale-attr.html)
 */
export type SfcLocaleAttrRuleConfig = RuleConfig<SfcLocaleAttrOptions>;

/**
 * Require or disallow the locale attribute on `<i18n>` block.
 *
 * @see [sfc-locale-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/sfc-locale-attr.html)
 */
export interface SfcLocaleAttrRule {
  /**
   * Require or disallow the locale attribute on `<i18n>` block.
   *
   * @see [sfc-locale-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/sfc-locale-attr.html)
   */
  '@intlify/vue-i18n/sfc-locale-attr': SfcLocaleAttrRuleConfig;
}
