import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ArrayCallbackReturnOption {
  allowImplicit?: boolean;
  checkForEach?: boolean;
  allowVoid?: boolean;
}

/**
 * Options.
 */
export type ArrayCallbackReturnOptions = [ArrayCallbackReturnOption?];

/**
 * Enforce `return` statements in callbacks of array methods.
 *
 * @see [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)
 */
export type ArrayCallbackReturnRuleConfig =
  RuleConfig<ArrayCallbackReturnOptions>;

/**
 * Enforce `return` statements in callbacks of array methods.
 *
 * @see [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)
 */
export interface ArrayCallbackReturnRule {
  /**
   * Enforce `return` statements in callbacks of array methods.
   *
   * @see [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)
   */
  'array-callback-return': ArrayCallbackReturnRuleConfig;
}
