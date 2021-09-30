import type { RuleConfig } from '../rule-config';

/**
 * Enforce self-closing style
 *
 * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
 */
export type HtmlSelfClosingRuleConfig = RuleConfig<[]>;

/**
 * Enforce self-closing style
 *
 * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
 */
export interface HtmlSelfClosingRule {
  /**
   * Enforce self-closing style
   *
   * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
   */
  'vue/html-self-closing': HtmlSelfClosingRuleConfig;
}
