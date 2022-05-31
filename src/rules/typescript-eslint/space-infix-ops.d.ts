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
 * @see [space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)
 */
export type SpaceInfixOpsRuleConfig = RuleConfig<SpaceInfixOpsOptions>;

/**
 * Require spacing around infix operators.
 *
 * @see [space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)
 */
export interface SpaceInfixOpsRule {
  /**
   * Require spacing around infix operators.
   *
   * @see [space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)
   */
  '@typescript-eslint/space-infix-ops': SpaceInfixOpsRuleConfig;
}
