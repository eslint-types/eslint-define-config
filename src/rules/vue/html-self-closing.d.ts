import type { RuleConfig } from '../rule-config';

/**
 * enforce self-closing style
 *
 * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
 */
export type HtmlSelfClosingRuleConfig = RuleConfig<[]>;

/**
 * enforce self-closing style
 *
 * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
 */
export interface HtmlSelfClosingRule {
  /**
   * enforce self-closing style
   *
   * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
   */
  'vue/html-self-closing': HtmlSelfClosingRuleConfig;
}
