import type { RuleConfig } from '../rule-config';

/**
 * Enforce end tag style.
 *
 * @see [html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
 */
export type HtmlEndTagsRuleConfig = RuleConfig<[]>;

/**
 * Enforce end tag style.
 *
 * @see [html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
 */
export interface HtmlEndTagsRule {
  /**
   * Enforce end tag style.
   *
   * @see [html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
   */
  'vue/html-end-tags': HtmlEndTagsRuleConfig;
}
