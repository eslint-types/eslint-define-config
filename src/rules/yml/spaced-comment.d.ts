import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface SpacedCommentConfig {
  exceptions?: string[];
  markers?: string[];
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
 * Enforce consistent spacing after the `#` in a comment.
 *
 * @see [spaced-comment](https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html)
 */
export type SpacedCommentRuleConfig = RuleConfig<SpacedCommentOptions>;

/**
 * Enforce consistent spacing after the `#` in a comment.
 *
 * @see [spaced-comment](https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html)
 */
export interface SpacedCommentRule {
  /**
   * Enforce consistent spacing after the `#` in a comment.
   *
   * @see [spaced-comment](https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html)
   */
  'yml/spaced-comment': SpacedCommentRuleConfig;
}
