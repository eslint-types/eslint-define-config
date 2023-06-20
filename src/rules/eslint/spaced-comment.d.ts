import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface SpacedCommentConfig {
  exceptions?: string[];
  markers?: string[];
  line?: {
    exceptions?: string[];
    markers?: string[];
  };
  block?: {
    exceptions?: string[];
    markers?: string[];
    balanced?: boolean;
  };
}

/**
 * Option.
 */
export type SpacedCommentOption = 'always' | 'never';

/**
 * Options.
 */
export type SpacedCommentOptions = [SpacedCommentOption?, SpacedCommentConfig?];

/**
 * Enforce consistent spacing after the `//` or `/*` in a comment.
 *
 * @see [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)
 */
export type SpacedCommentRuleConfig = RuleConfig<SpacedCommentOptions>;

/**
 * Enforce consistent spacing after the `//` or `/*` in a comment.
 *
 * @see [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)
 */
export interface SpacedCommentRule {
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment.
   *
   * @see [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)
   */
  'spaced-comment': SpacedCommentRuleConfig;
}
