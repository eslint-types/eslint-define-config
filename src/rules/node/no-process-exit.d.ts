import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `process.exit()`.
 *
 * @see [no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-exit.md)
 */
export type NoProcessExitRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `process.exit()`.
 *
 * @see [no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-exit.md)
 */
export interface NoProcessExitRule {
  /**
   * Disallow the use of `process.exit()`.
   *
   * @see [no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-exit.md)
   */
  'node/no-process-exit': NoProcessExitRuleConfig;
}
