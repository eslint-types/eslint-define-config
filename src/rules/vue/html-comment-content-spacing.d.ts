import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface HtmlCommentContentSpacingConfig {
  exceptions?: string[];
}

/**
 * Option.
 */
export type HtmlCommentContentSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type HtmlCommentContentSpacingOptions = [
  HtmlCommentContentSpacingOption?,
  HtmlCommentContentSpacingConfig?,
];

/**
 * Enforce unified spacing in HTML comments.
 *
 * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
 */
export type HtmlCommentContentSpacingRuleConfig =
  RuleConfig<HtmlCommentContentSpacingOptions>;

/**
 * Enforce unified spacing in HTML comments.
 *
 * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
 */
export interface HtmlCommentContentSpacingRule {
  /**
   * Enforce unified spacing in HTML comments.
   *
   * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
   */
  'vue/html-comment-content-spacing': HtmlCommentContentSpacingRuleConfig;
}
