import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `process.exit()`.
 *
 * @see [no-process-exit](https://eslint.org/docs/rules/no-process-exit)
 *
 * @deprecated This rule was **deprecated** in ESLint `v7.0.0`. Please use the corresponding rule in [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node).
 */
export type NoProcessExitRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `process.exit()`.
 *
 * @see [no-process-exit](https://eslint.org/docs/rules/no-process-exit)
 *
 * @deprecated This rule was **deprecated** in ESLint `v7.0.0`. Please use the corresponding rule in [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node).
 */
export interface NoProcessExitRule {
  /**
   * Disallow the use of `process.exit()`.
   *
   * @see [no-process-exit](https://eslint.org/docs/rules/no-process-exit)
   *
   * @deprecated This rule was **deprecated** in ESLint `v7.0.0`. Please use the corresponding rule in [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node).
   */
  'no-process-exit'?: NoProcessExitRuleConfig;
}
