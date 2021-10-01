import type { RuleConfig } from '../rule-config';

/**
 * Disallow returning values from Promise executor functions.
 *
 * @see [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)
 */
export type NoPromiseExecutorReturnRuleConfig = RuleConfig<[]>;

/**
 * Disallow returning values from Promise executor functions.
 *
 * @see [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)
 */
export interface NoPromiseExecutorReturnRule {
  /**
   * Disallow returning values from Promise executor functions.
   *
   * @see [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)
   */
  'no-promise-executor-return': NoPromiseExecutorReturnRuleConfig;
}
