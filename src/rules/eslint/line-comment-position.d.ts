import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type LineCommentPositionOption =
  | ('above' | 'beside')
  | {
      position?: 'above' | 'beside';
      ignorePattern?: string;
      applyDefaultPatterns?: boolean;
      applyDefaultIgnorePatterns?: boolean;
    };

/**
 * Options.
 */
export type LineCommentPositionOptions = [LineCommentPositionOption?];

/**
 * Enforce position of line comments.
 *
 * @see [line-comment-position](https://eslint.org/docs/latest/rules/line-comment-position)
 */
export type LineCommentPositionRuleConfig =
  RuleConfig<LineCommentPositionOptions>;

/**
 * Enforce position of line comments.
 *
 * @see [line-comment-position](https://eslint.org/docs/latest/rules/line-comment-position)
 */
export interface LineCommentPositionRule {
  /**
   * Enforce position of line comments.
   *
   * @see [line-comment-position](https://eslint.org/docs/latest/rules/line-comment-position)
   */
  'line-comment-position': LineCommentPositionRuleConfig;
}
