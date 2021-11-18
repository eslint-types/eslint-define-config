import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PromiseFunctionAsyncOption {
  allowAny?: boolean;
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
 * Requires any function or method that returns a Promise to be marked async.
 *
 * @see [promise-function-async](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/promise-function-async.md)
 */
export type PromiseFunctionAsyncRuleConfig = RuleConfig<PromiseFunctionAsyncOptions>;

/**
 * Requires any function or method that returns a Promise to be marked async.
 *
 * @see [promise-function-async](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/promise-function-async.md)
 */
export interface PromiseFunctionAsyncRule {
  /**
   * Requires any function or method that returns a Promise to be marked async.
   *
   * @see [promise-function-async](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/promise-function-async.md)
   */
  '@typescript-eslint/promise-function-async': PromiseFunctionAsyncRuleConfig;
}
