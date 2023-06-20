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
 * @deprecated
 *
 * @see [handle-callback-err](https://eslint.org/docs/latest/rules/handle-callback-err)
 */
export type HandleCallbackErrRuleConfig = RuleConfig<HandleCallbackErrOptions>;

/**
 * Require error handling in callbacks.
 *
 * @deprecated
 *
 * @see [handle-callback-err](https://eslint.org/docs/latest/rules/handle-callback-err)
 */
export interface HandleCallbackErrRule {
  /**
   * Require error handling in callbacks.
   *
   * @deprecated
   *
   * @see [handle-callback-err](https://eslint.org/docs/latest/rules/handle-callback-err)
   */
  'handle-callback-err': HandleCallbackErrRuleConfig;
}
