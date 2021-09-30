import type { RuleConfig } from '../rule-config';

/**
 * enforce unified line brake in HTML comments
 *
 * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
 */
export type HtmlCommentContentNewlineRuleConfig = RuleConfig<[]>;

/**
 * enforce unified line brake in HTML comments
 *
 * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
 */
export interface HtmlCommentContentNewlineRule {
  /**
   * enforce unified line brake in HTML comments
   *
   * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
   */
  'vue/html-comment-content-newline': HtmlCommentContentNewlineRuleConfig;
}
