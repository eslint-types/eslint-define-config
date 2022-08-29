import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PromiseFunctionAsyncOption {
  /**
   * Whether to consider `any` and `unknown` to be Promises.
   */
  allowAny?: boolean;
  /**
   * Any extra names of classes or interfaces to be considered Promises.
   */
  allowedPromiseNames?: string[];
  checkArrowFunctions?: boolean;
  checkFunctionDeclarations?: boolean;
  checkFunctionExpressions?: boolean;
  checkMethodDeclarations?: boolean;
}

/**
 * Options.
 */
export type PromiseFunctionAsyncOptions = [PromiseFunctionAsyncOption?];

/**
 * Require any function or method that returns a Promise to be marked async.
 *
 * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
 */
export type PromiseFunctionAsyncRuleConfig =
  RuleConfig<PromiseFunctionAsyncOptions>;

/**
 * Require any function or method that returns a Promise to be marked async.
 *
 * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
 */
export interface PromiseFunctionAsyncRule {
  /**
   * Require any function or method that returns a Promise to be marked async.
   *
   * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
   */
  '@typescript-eslint/promise-function-async': PromiseFunctionAsyncRuleConfig;
}
