import type { RuleConfig } from '../rule-config';

/**
 * enforce quotes style of HTML attributes
 *
 * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
 */
export type HtmlQuotesRuleConfig = RuleConfig<[]>;

/**
 * enforce quotes style of HTML attributes
 *
 * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
 */
export interface HtmlQuotesRule {
  /**
   * enforce quotes style of HTML attributes
   *
   * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
   */
  'vue/html-quotes': HtmlQuotesRuleConfig;
}
