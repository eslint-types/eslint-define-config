import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type OperatorAssignmentOption = 'always' | 'never';

/**
 * Options.
 */
export type OperatorAssignmentOptions = [OperatorAssignmentOption?];

/**
 * Require or disallow assignment operator shorthand where possible.
 *
 * @see [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment)
 */
export type OperatorAssignmentRuleConfig =
  RuleConfig<OperatorAssignmentOptions>;

/**
 * Require or disallow assignment operator shorthand where possible.
 *
 * @see [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment)
 */
export interface OperatorAssignmentRule {
  /**
   * Require or disallow assignment operator shorthand where possible.
   *
   * @see [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment)
   */
  'operator-assignment': OperatorAssignmentRuleConfig;
}
