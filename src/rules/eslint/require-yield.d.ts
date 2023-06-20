import type { RuleConfig } from '../rule-config';

/**
 * Require generator functions to contain `yield`.
 *
 * @see [require-yield](https://eslint.org/docs/latest/rules/require-yield)
 */
export type RequireYieldRuleConfig = RuleConfig<[]>;

/**
 * Require generator functions to contain `yield`.
 *
 * @see [require-yield](https://eslint.org/docs/latest/rules/require-yield)
 */
export interface RequireYieldRule {
  /**
   * Require generator functions to contain `yield`.
   *
   * @see [require-yield](https://eslint.org/docs/latest/rules/require-yield)
   */
  'require-yield': RequireYieldRuleConfig;
}
