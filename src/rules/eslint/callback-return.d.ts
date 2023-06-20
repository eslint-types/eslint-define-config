import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CallbackReturnOption = string[];

/**
 * Options.
 */
export type CallbackReturnOptions = [CallbackReturnOption?];

/**
 * Require `return` statements after callbacks.
 *
 * @deprecated
 *
 * @see [callback-return](https://eslint.org/docs/latest/rules/callback-return)
 */
export type CallbackReturnRuleConfig = RuleConfig<CallbackReturnOptions>;

/**
 * Require `return` statements after callbacks.
 *
 * @deprecated
 *
 * @see [callback-return](https://eslint.org/docs/latest/rules/callback-return)
 */
export interface CallbackReturnRule {
  /**
   * Require `return` statements after callbacks.
   *
   * @deprecated
   *
   * @see [callback-return](https://eslint.org/docs/latest/rules/callback-return)
   */
  'callback-return': CallbackReturnRuleConfig;
}
