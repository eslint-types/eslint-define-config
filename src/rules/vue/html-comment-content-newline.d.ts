import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface HtmlCommentContentNewlineConfig {
  exceptions?: string[];
}

/**
 * Option.
 */
export type HtmlCommentContentNewlineOption =
  | ('always' | 'never')
  | {
      singleline?: 'always' | 'never' | 'ignore';
      multiline?: 'always' | 'never' | 'ignore';
    };

/**
 * Options.
 */
export type HtmlCommentContentNewlineOptions = [
  HtmlCommentContentNewlineOption?,
  HtmlCommentContentNewlineConfig?,
];

/**
 * Enforce unified line brake in HTML comments.
 *
 * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
 */
export type HtmlCommentContentNewlineRuleConfig =
  RuleConfig<HtmlCommentContentNewlineOptions>;

/**
 * Enforce unified line brake in HTML comments.
 *
 * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
 */
export interface HtmlCommentContentNewlineRule {
  /**
   * Enforce unified line brake in HTML comments.
   *
   * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
   */
  'vue/html-comment-content-newline': HtmlCommentContentNewlineRuleConfig;
}
