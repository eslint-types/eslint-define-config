import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoWarningCommentsOption {
  terms?: string[];
  location?: 'start' | 'anywhere';
}

/**
 * Options.
 */
export type NoWarningCommentsOptions = [NoWarningCommentsOption?];

/**
 * Disallow specified warning terms in comments.
 *
 * @see [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)
 */
export type NoWarningCommentsRuleConfig = RuleConfig<NoWarningCommentsOptions>;

/**
 * Disallow specified warning terms in comments.
 *
 * @see [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)
 */
export interface NoWarningCommentsRule {
  /**
   * Disallow specified warning terms in comments.
   *
   * @see [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)
   */
  'no-warning-comments': NoWarningCommentsRuleConfig;
}
