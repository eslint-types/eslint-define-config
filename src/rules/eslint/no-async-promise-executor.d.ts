import type { RuleConfig } from '../rule-config';

/**
 * Disallow using an async function as a Promise executor.
 *
 * @see [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor)
 */
export type NoAsyncPromiseExecutorRuleConfig = RuleConfig<[]>;

/**
 * Disallow using an async function as a Promise executor.
 *
 * @see [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor)
 */
export interface NoAsyncPromiseExecutorRule {
  /**
   * Disallow using an async function as a Promise executor.
   *
   * @see [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor)
   */
  'no-async-promise-executor': NoAsyncPromiseExecutorRuleConfig;
}
