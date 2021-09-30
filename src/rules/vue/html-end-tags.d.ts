import type { RuleConfig } from '../rule-config';

/**
 * enforce end tag style
 *
 * @see [html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
 */
export type HtmlEndTagsRuleConfig = RuleConfig<[]>;

/**
 * enforce end tag style
 *
 * @see [html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
 */
export interface HtmlEndTagsRule {
  /**
   * enforce end tag style
   *
   * @see [html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
   */
  'vue/html-end-tags': HtmlEndTagsRuleConfig;
}
