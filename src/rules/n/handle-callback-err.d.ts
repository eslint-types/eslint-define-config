import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type HandleCallbackErrOption = string;

/**
 * Options.
 */
export type HandleCallbackErrOptions = [HandleCallbackErrOption?];

/**
 * Require error handling in callbacks.
 *
 * @see [handle-callback-err](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/handle-callback-err.md)
 */
export type HandleCallbackErrRuleConfig = RuleConfig<HandleCallbackErrOptions>;

/**
 * Require error handling in callbacks.
 *
 * @see [handle-callback-err](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/handle-callback-err.md)
 */
export interface HandleCallbackErrRule {
  /**
   * Require error handling in callbacks.
   *
   * @see [handle-callback-err](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/handle-callback-err.md)
   */
  'n/handle-callback-err': HandleCallbackErrRuleConfig;
}
