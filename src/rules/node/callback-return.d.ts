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
 * @see [callback-return](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/callback-return.md)
 */
export type CallbackReturnRuleConfig = RuleConfig<CallbackReturnOptions>;

/**
 * Require `return` statements after callbacks.
 *
 * @see [callback-return](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/callback-return.md)
 */
export interface CallbackReturnRule {
  /**
   * Require `return` statements after callbacks.
   *
   * @see [callback-return](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/callback-return.md)
   */
  'node/callback-return': CallbackReturnRuleConfig;
}
