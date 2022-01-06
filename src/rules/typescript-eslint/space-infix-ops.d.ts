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
 * This rule is aimed at ensuring there are spaces around infix operators.
 *
 * @see [space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)
 */
export type SpaceInfixOpsRuleConfig = RuleConfig<SpaceInfixOpsOptions>;

/**
 * This rule is aimed at ensuring there are spaces around infix operators.
 *
 * @see [space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)
 */
export interface SpaceInfixOpsRule {
  /**
   * This rule is aimed at ensuring there are spaces around infix operators.
   *
   * @see [space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)
   */
  '@typescript-eslint/space-infix-ops': SpaceInfixOpsRuleConfig;
}
