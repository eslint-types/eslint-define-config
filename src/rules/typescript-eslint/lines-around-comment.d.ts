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
  allowInterfaceStart?: boolean;
  allowInterfaceEnd?: boolean;
  allowTypeStart?: boolean;
  allowTypeEnd?: boolean;
  allowEnumStart?: boolean;
  allowEnumEnd?: boolean;
  allowModuleStart?: boolean;
  allowModuleEnd?: boolean;
  ignorePattern?: string;
  applyDefaultIgnorePatterns?: boolean;
}

/**
 * Options.
 */
export type LinesAroundCommentOptions = [LinesAroundCommentOption?];

/**
 * Require empty lines around comments.
 *
 * @see [lines-around-comment](https://typescript-eslint.io/rules/lines-around-comment)
 */
export type LinesAroundCommentRuleConfig =
  RuleConfig<LinesAroundCommentOptions>;

/**
 * Require empty lines around comments.
 *
 * @see [lines-around-comment](https://typescript-eslint.io/rules/lines-around-comment)
 */
export interface LinesAroundCommentRule {
  /**
   * Require empty lines around comments.
   *
   * @see [lines-around-comment](https://typescript-eslint.io/rules/lines-around-comment)
   */
  '@typescript-eslint/lines-around-comment': LinesAroundCommentRuleConfig;
}
