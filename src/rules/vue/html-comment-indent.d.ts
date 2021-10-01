import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type HtmlCommentIndentOption = number | 'tab';

/**
 * Options.
 */
export type HtmlCommentIndentOptions = [HtmlCommentIndentOption?];

/**
 * Enforce consistent indentation in HTML comments.
 *
 * @see [html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)
 */
export type HtmlCommentIndentRuleConfig = RuleConfig<HtmlCommentIndentOptions>;

/**
 * Enforce consistent indentation in HTML comments.
 *
 * @see [html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)
 */
export interface HtmlCommentIndentRule {
  /**
   * Enforce consistent indentation in HTML comments.
   *
   * @see [html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)
   */
  'vue/html-comment-indent': HtmlCommentIndentRuleConfig;
}
