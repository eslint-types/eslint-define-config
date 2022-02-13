import type { RuleConfig } from '../rule-config';

/**
 * Disallow use HTML localization messages.
 *
 * @see [no-html-messages](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-html-messages.html)
 */
export type NoHtmlMessagesRuleConfig = RuleConfig<[]>;

/**
 * Disallow use HTML localization messages.
 *
 * @see [no-html-messages](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-html-messages.html)
 */
export interface NoHtmlMessagesRule {
  /**
   * Disallow use HTML localization messages.
   *
   * @see [no-html-messages](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-html-messages.html)
   */
  '@intlify/vue-i18n/no-html-messages': NoHtmlMessagesRuleConfig;
}
