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
 * @see [space-infix-ops](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/space-infix-ops.md)
 */
export type SpaceInfixOpsRuleConfig = RuleConfig<SpaceInfixOpsOptions>;

/**
 * This rule is aimed at ensuring there are spaces around infix operators.
 *
 * @see [space-infix-ops](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/space-infix-ops.md)
 */
export interface SpaceInfixOpsRule {
  /**
   * This rule is aimed at ensuring there are spaces around infix operators.
   *
   * @see [space-infix-ops](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/space-infix-ops.md)
   */
  '@typescript-eslint/space-infix-ops': SpaceInfixOpsRuleConfig;
}
