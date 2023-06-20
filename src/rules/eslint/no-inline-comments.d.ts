import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoInlineCommentsOption {
  ignorePattern?: string;
}

/**
 * Options.
 */
export type NoInlineCommentsOptions = [NoInlineCommentsOption?];

/**
 * Disallow inline comments after code.
 *
 * @see [no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)
 */
export type NoInlineCommentsRuleConfig = RuleConfig<NoInlineCommentsOptions>;

/**
 * Disallow inline comments after code.
 *
 * @see [no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)
 */
export interface NoInlineCommentsRule {
  /**
   * Disallow inline comments after code.
   *
   * @see [no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)
   */
  'no-inline-comments': NoInlineCommentsRuleConfig;
}
