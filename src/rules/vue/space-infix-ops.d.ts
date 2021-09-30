import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SpaceInfixOpsOption = {
  /**
   * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
   */
  int32Hint?: any;
};

/**
 * Options.
 */
export type SpaceInfixOpsOptions = [SpaceInfixOpsOption?];

/**
 * Require spacing around infix operators
 *
 * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
 */
export type SpaceInfixOpsRuleConfig = RuleConfig<SpaceInfixOpsOptions>;

/**
 * Require spacing around infix operators
 *
 * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
 */
export interface SpaceInfixOpsRule {
  /**
   * Require spacing around infix operators
   *
   * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
   */
  'vue/space-infix-ops': SpaceInfixOpsRuleConfig;
}
