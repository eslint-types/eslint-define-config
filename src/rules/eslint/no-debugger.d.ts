import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow the use of `debugger`.
 *
 * @see [no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
 */
export type NoDebuggerRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `debugger`.
 *
 * @see [no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
 */
export interface NoDebuggerRule {
  /**
   * Disallow the use of `debugger`.
   *
   * @see [no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
   */
  'no-debugger': NoDebuggerRuleConfig;
}
