import type { RuleConfig } from '../rule-config';

/**
 * Require `for-in` loops to include an `if` statement.
 *
 * @see [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)
 */
export type GuardForInRuleConfig = RuleConfig<[]>;

/**
 * Require `for-in` loops to include an `if` statement.
 *
 * @see [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)
 */
export interface GuardForInRule {
  /**
   * Require `for-in` loops to include an `if` statement.
   *
   * @see [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)
   */
  'guard-for-in': GuardForInRuleConfig;
}
