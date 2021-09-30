import type { RuleConfig } from '../rule-config';

/**
 * Enforce quotes style of HTML attributes
 *
 * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
 */
export type HtmlQuotesRuleConfig = RuleConfig<[]>;

/**
 * Enforce quotes style of HTML attributes
 *
 * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
 */
export interface HtmlQuotesRule {
  /**
   * Enforce quotes style of HTML attributes
   *
   * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
   */
  'vue/html-quotes': HtmlQuotesRuleConfig;
}
