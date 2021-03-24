import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoDebuggerRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoDebuggerRule {
  /**
   * Disallow the use of debugger.
   *
   * @see [no-debugger](https://eslint.org/docs/rules/no-debugger)
   */
  'no-debugger': NoDebuggerRuleConfig;
}
