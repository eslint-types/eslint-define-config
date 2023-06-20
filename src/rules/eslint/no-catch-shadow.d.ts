import type { RuleConfig } from '../rule-config';

/**
 * Disallow `catch` clause parameters from shadowing variables in the outer scope.
 *
 * @deprecated
 *
 * @see [no-catch-shadow](https://eslint.org/docs/latest/rules/no-catch-shadow)
 */
export type NoCatchShadowRuleConfig = RuleConfig<[]>;

/**
 * Disallow `catch` clause parameters from shadowing variables in the outer scope.
 *
 * @deprecated
 *
 * @see [no-catch-shadow](https://eslint.org/docs/latest/rules/no-catch-shadow)
 */
export interface NoCatchShadowRule {
  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope.
   *
   * @deprecated
   *
   * @see [no-catch-shadow](https://eslint.org/docs/latest/rules/no-catch-shadow)
   */
  'no-catch-shadow': NoCatchShadowRuleConfig;
}
