import type { RuleConfig } from '../rule-config';

/**
 * Enforce unified line brake in HTML comments
 *
 * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
 */
export type HtmlCommentContentNewlineRuleConfig = RuleConfig<[]>;

/**
 * Enforce unified line brake in HTML comments
 *
 * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
 */
export interface HtmlCommentContentNewlineRule {
  /**
   * Enforce unified line brake in HTML comments
   *
   * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
   */
  'vue/html-comment-content-newline': HtmlCommentContentNewlineRuleConfig;
}