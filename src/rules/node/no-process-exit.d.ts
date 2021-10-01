import type { RuleConfig } from '../rule-config';

/**
 * Options.
 */
export type NoProcessExitRuleOptions = [];

/**
 * Disallow the use of `process.exit()`.
 *
 * @see [no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md)
 */
export type NoProcessExitRuleConfig = RuleConfig<NoProcessExitRuleOptions>;

/**
 * Disallow the use of `process.exit()`.
 *
 * @see [no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md)
 */
export interface NoProcessExitRule {
  /**
   * Disallow the use of `process.exit()`.
   *
   * @see [no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md)
   */
  'node/no-process-exit': NoProcessExitRuleConfig;
}
