import type { RuleConfig } from '../rule-config';

/**
 * enforce unified spacing in HTML comments
 *
 * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
 */
export type HtmlCommentContentSpacingRuleConfig = RuleConfig<[]>;

/**
 * enforce unified spacing in HTML comments
 *
 * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
 */
export interface HtmlCommentContentSpacingRule {
  /**
   * enforce unified spacing in HTML comments
   *
   * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
   */
  'vue/html-comment-content-spacing': HtmlCommentContentSpacingRuleConfig;
}
