import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SpaceUnaryOpsOption = {
  /**
   * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
   */
  words?: any;

  /**
   * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
   */
  nonwords?: any;

  /**
   * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
   */
  overrides?: any;
};

/**
 * Options.
 */
export type SpaceUnaryOpsOptions = [SpaceUnaryOpsOption?];

/**
 * enforce consistent spacing before or after unary operators
 *
 * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
 */
export type SpaceUnaryOpsRuleConfig = RuleConfig<SpaceUnaryOpsOptions>;

/**
 * enforce consistent spacing before or after unary operators
 *
 * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
 */
export interface SpaceUnaryOpsRule {
  /**
   * enforce consistent spacing before or after unary operators
   *
   * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
   */
  'vue/space-unary-ops': SpaceUnaryOpsRuleConfig;
}
