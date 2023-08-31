import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow the use of `process.exit()`.
 *
 * @deprecated
 *
 * @see [no-process-exit](https://eslint.org/docs/latest/rules/no-process-exit)
 */
export type NoProcessExitRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `process.exit()`.
 *
 * @deprecated
 *
 * @see [no-process-exit](https://eslint.org/docs/latest/rules/no-process-exit)
 */
export interface NoProcessExitRule {
  /**
   * Disallow the use of `process.exit()`.
   *
   * @deprecated
   *
   * @see [no-process-exit](https://eslint.org/docs/latest/rules/no-process-exit)
   */
  'no-process-exit': NoProcessExitRuleConfig;
}
