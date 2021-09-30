import type { RuleConfig } from '../rule-config';

/**
 * Enforce unified spacing in HTML comments
 *
 * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
 */
export type HtmlCommentContentSpacingRuleConfig = RuleConfig<[]>;

/**
 * Enforce unified spacing in HTML comments
 *
 * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
 */
export interface HtmlCommentContentSpacingRule {
  /**
   * Enforce unified spacing in HTML comments
   *
   * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
   */
  'vue/html-comment-content-spacing': HtmlCommentContentSpacingRuleConfig;
}
