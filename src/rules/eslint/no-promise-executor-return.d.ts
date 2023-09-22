import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoPromiseExecutorReturnOption {
  allowVoid?: boolean;
}

/**
 * Options.
 */
export type NoPromiseExecutorReturnOptions = [NoPromiseExecutorReturnOption?];

/**
 * Disallow returning values from Promise executor functions.
 *
 * @see [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return)
 */
export type NoPromiseExecutorReturnRuleConfig =
  RuleConfig<NoPromiseExecutorReturnOptions>;

/**
 * Disallow returning values from Promise executor functions.
 *
 * @see [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return)
 */
export interface NoPromiseExecutorReturnRule {
  /**
   * Disallow returning values from Promise executor functions.
   *
   * @see [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return)
   */
  'no-promise-executor-return': NoPromiseExecutorReturnRuleConfig;
}
