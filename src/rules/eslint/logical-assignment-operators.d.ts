import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type LogicalAssignmentOperatorsOption = (
  | []
  | ['always']
  | [
      'always',
      {
        enforceForIfStatements?: boolean;
      },
    ]
  | ['never']
) &
  any[];

/**
 * Options.
 */
export type LogicalAssignmentOperatorsOptions =
  LogicalAssignmentOperatorsOption;

/**
 * Require or disallow logical assignment logical operator shorthand.
 *
 * @see [logical-assignment-operators](https://eslint.org/docs/rules/logical-assignment-operators)
 */
export type LogicalAssignmentOperatorsRuleConfig =
  RuleConfig<LogicalAssignmentOperatorsOptions>;

/**
 * Require or disallow logical assignment logical operator shorthand.
 *
 * @see [logical-assignment-operators](https://eslint.org/docs/rules/logical-assignment-operators)
 */
export interface LogicalAssignmentOperatorsRule {
  /**
   * Require or disallow logical assignment logical operator shorthand.
   *
   * @see [logical-assignment-operators](https://eslint.org/docs/rules/logical-assignment-operators)
   */
  'logical-assignment-operators': LogicalAssignmentOperatorsRuleConfig;
}
