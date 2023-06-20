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
 * Require or disallow logical assignment operator shorthand.
 *
 * @see [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)
 */
export type LogicalAssignmentOperatorsRuleConfig =
  RuleConfig<LogicalAssignmentOperatorsOptions>;

/**
 * Require or disallow logical assignment operator shorthand.
 *
 * @see [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)
 */
export interface LogicalAssignmentOperatorsRule {
  /**
   * Require or disallow logical assignment operator shorthand.
   *
   * @see [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)
   */
  'logical-assignment-operators': LogicalAssignmentOperatorsRuleConfig;
}
