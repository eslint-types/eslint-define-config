import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type HtmlQuotesOption = 'double' | 'single';

/**
 * Options.
 */
export type HtmlQuotesOptions = [HtmlQuotesOption?];

/**
 * Enforce quotes style of HTML attributes
 *
 * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
 */
export type HtmlQuotesRuleConfig = RuleConfig<HtmlQuotesOptions>;

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
