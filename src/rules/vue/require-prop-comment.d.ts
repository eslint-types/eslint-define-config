import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequirePropCommentOption {
  type?: 'JSDoc' | 'line' | 'block' | 'any';
}

/**
 * Options.
 */
export type RequirePropCommentOptions = [RequirePropCommentOption?];

/**
 * Require props to have a comment.
 *
 * @see [require-prop-comment](https://eslint.vuejs.org/rules/require-prop-comment.html)
 */
export type RequirePropCommentRuleConfig =
  RuleConfig<RequirePropCommentOptions>;

/**
 * Require props to have a comment.
 *
 * @see [require-prop-comment](https://eslint.vuejs.org/rules/require-prop-comment.html)
 */
export interface RequirePropCommentRule {
  /**
   * Require props to have a comment.
   *
   * @see [require-prop-comment](https://eslint.vuejs.org/rules/require-prop-comment.html)
   */
  'vue/require-prop-comment': RequirePropCommentRuleConfig;
}
