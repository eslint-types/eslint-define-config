import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `arguments.caller` or `arguments.callee`.
 *
 * @see [no-caller](https://eslint.org/docs/latest/rules/no-caller)
 */
export type NoCallerRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `arguments.caller` or `arguments.callee`.
 *
 * @see [no-caller](https://eslint.org/docs/latest/rules/no-caller)
 */
export interface NoCallerRule {
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`.
   *
   * @see [no-caller](https://eslint.org/docs/latest/rules/no-caller)
   */
  'no-caller': NoCallerRuleConfig;
}
