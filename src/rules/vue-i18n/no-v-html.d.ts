import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of localization methods on v-html to prevent XSS attack.
 *
 *
 */
export type NoVHtmlRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of localization methods on v-html to prevent XSS attack.
 *
 *
 */
export interface NoVHtmlRule {
  /**
   * Disallow use of localization methods on v-html to prevent XSS attack.
   *
   *
   */
  '@intlify/vue-i18n/no-v-html': NoVHtmlRuleConfig;
}
