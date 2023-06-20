import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MultilineCommentStyleOption =
  | []
  | ['starred-block' | 'bare-block']
  | []
  | ['separate-lines']
  | [
      'separate-lines',
      {
        checkJSDoc?: boolean;
      },
    ];

/**
 * Options.
 */
export type MultilineCommentStyleOptions = MultilineCommentStyleOption;

/**
 * Enforce a particular style for multiline comments.
 *
 * @see [multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)
 */
export type MultilineCommentStyleRuleConfig =
  RuleConfig<MultilineCommentStyleOptions>;

/**
 * Enforce a particular style for multiline comments.
 *
 * @see [multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)
 */
export interface MultilineCommentStyleRule {
  /**
   * Enforce a particular style for multiline comments.
   *
   * @see [multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)
   */
  'multiline-comment-style': MultilineCommentStyleRuleConfig;
}
