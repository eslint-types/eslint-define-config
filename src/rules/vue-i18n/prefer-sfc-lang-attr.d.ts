import type { RuleConfig } from '../rule-config';

/**
 * Require lang attribute on `<i18n>` block.
 *
 * @see [prefer-sfc-lang-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-sfc-lang-attr.html)
 */
export type PreferSfcLangAttrRuleConfig = RuleConfig<[]>;

/**
 * Require lang attribute on `<i18n>` block.
 *
 * @see [prefer-sfc-lang-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-sfc-lang-attr.html)
 */
export interface PreferSfcLangAttrRule {
  /**
   * Require lang attribute on `<i18n>` block.
   *
   * @see [prefer-sfc-lang-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-sfc-lang-attr.html)
   */
  '@intlify/vue-i18n/prefer-sfc-lang-attr': PreferSfcLangAttrRuleConfig;
}
