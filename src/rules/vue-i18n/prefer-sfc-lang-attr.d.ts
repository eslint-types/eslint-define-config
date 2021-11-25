import type { RuleConfig } from '../rule-config';

/**
 * Require lang attribute on `<i18n>` block.
 *
 *
 */
export type PreferSfcLangAttrRuleConfig = RuleConfig<[]>;

/**
 * Require lang attribute on `<i18n>` block.
 *
 *
 */
export interface PreferSfcLangAttrRule {
  /**
   * Require lang attribute on `<i18n>` block.
   *
   *
   */
  '@intlify/vue-i18n/prefer-sfc-lang-attr': PreferSfcLangAttrRuleConfig;
}
