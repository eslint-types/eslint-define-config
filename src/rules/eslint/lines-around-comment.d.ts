import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface LinesAroundCommentOption {
  beforeBlockComment?: boolean;
  afterBlockComment?: boolean;
  beforeLineComment?: boolean;
  afterLineComment?: boolean;
  allowBlockStart?: boolean;
  allowBlockEnd?: boolean;
  allowClassStart?: boolean;
  allowClassEnd?: boolean;
  allowObjectStart?: boolean;
  allowObjectEnd?: boolean;
  allowArrayStart?: boolean;
  allowArrayEnd?: boolean;
  ignorePattern?: string;
  applyDefaultIgnorePatterns?: boolean;
  afterHashbangComment?: boolean;
}

/**
 * Options.
 */
export type LinesAroundCommentOptions = [LinesAroundCommentOption?];

/**
 * Require empty lines around comments.
 *
 * @see [lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)
 */
export type LinesAroundCommentRuleConfig =
  RuleConfig<LinesAroundCommentOptions>;

/**
 * Require empty lines around comments.
 *
 * @see [lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)
 */
export interface LinesAroundCommentRule {
  /**
   * Require empty lines around comments.
   *
   * @see [lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)
   */
  'lines-around-comment': LinesAroundCommentRuleConfig;
}
