import type { RuleConfig } from '../rule-config';

/**
 * Disallow use HTML localization messages.
 *
 *
 */
export type NoHtmlMessagesRuleConfig = RuleConfig<[]>;

/**
 * Disallow use HTML localization messages.
 *
 *
 */
export interface NoHtmlMessagesRule {
  /**
   * Disallow use HTML localization messages.
   *
   *
   */
  '@intlify/vue-i18n/no-html-messages': NoHtmlMessagesRuleConfig;
}
