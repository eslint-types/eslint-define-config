import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SpaceUnaryOpsOption {
  words?: boolean;
  nonwords?: boolean;
  overrides?: {
    [k: string]: boolean;
  };
}

/**
 * Options.
 */
export type SpaceUnaryOpsOptions = [SpaceUnaryOpsOption?];

/**
 * Enforce consistent spacing before or after unary operators.
 *
 * @see [space-unary-ops](https://eslint.org/docs/latest/rules/space-unary-ops)
 */
export type SpaceUnaryOpsRuleConfig = RuleConfig<SpaceUnaryOpsOptions>;

/**
 * Enforce consistent spacing before or after unary operators.
 *
 * @see [space-unary-ops](https://eslint.org/docs/latest/rules/space-unary-ops)
 */
export interface SpaceUnaryOpsRule {
  /**
   * Enforce consistent spacing before or after unary operators.
   *
   * @see [space-unary-ops](https://eslint.org/docs/latest/rules/space-unary-ops)
   */
  'space-unary-ops': SpaceUnaryOpsRuleConfig;
}
