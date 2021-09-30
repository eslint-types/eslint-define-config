import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent indentation in HTML comments
 *
 * @see [html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)
 */
export type HtmlCommentIndentRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent indentation in HTML comments
 *
 * @see [html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)
 */
export interface HtmlCommentIndentRule {
  /**
   * Enforce consistent indentation in HTML comments
   *
   * @see [html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)
   */
  'vue/html-comment-indent': HtmlCommentIndentRuleConfig;
}
