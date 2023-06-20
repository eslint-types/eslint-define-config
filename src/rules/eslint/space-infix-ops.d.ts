import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SpaceInfixOpsOption {
  int32Hint?: boolean;
}

/**
 * Options.
 */
export type SpaceInfixOpsOptions = [SpaceInfixOpsOption?];

/**
 * Require spacing around infix operators.
 *
 * @see [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
 */
export type SpaceInfixOpsRuleConfig = RuleConfig<SpaceInfixOpsOptions>;

/**
 * Require spacing around infix operators.
 *
 * @see [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
 */
export interface SpaceInfixOpsRule {
  /**
   * Require spacing around infix operators.
   *
   * @see [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
   */
  'space-infix-ops': SpaceInfixOpsRuleConfig;
}
