import type { RuleConfig } from '../rule-config';

/**
 * Disallow `process.exit()`.
 *
 * @see [no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-process-exit.md)
 */
export type NoProcessExitRuleConfig = RuleConfig<[]>;

/**
 * Disallow `process.exit()`.
 *
 * @see [no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-process-exit.md)
 */
export interface NoProcessExitRule {
  /**
   * Disallow `process.exit()`.
   *
   * @see [no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-process-exit.md)
   */
  'unicorn/no-process-exit': NoProcessExitRuleConfig;
}
