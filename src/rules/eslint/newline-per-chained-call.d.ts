import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NewlinePerChainedCallOption {
  ignoreChainWithDepth?: number;
}

/**
 * Options.
 */
export type NewlinePerChainedCallOptions = [NewlinePerChainedCallOption?];

/**
 * Require a newline after each call in a method chain.
 *
 * @see [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
 */
export type NewlinePerChainedCallRuleConfig =
  RuleConfig<NewlinePerChainedCallOptions>;

/**
 * Require a newline after each call in a method chain.
 *
 * @see [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
 */
export interface NewlinePerChainedCallRule {
  /**
   * Require a newline after each call in a method chain.
   *
   * @see [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
   */
  'newline-per-chained-call': NewlinePerChainedCallRuleConfig;
}
