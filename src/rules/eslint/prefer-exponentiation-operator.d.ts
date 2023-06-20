import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `Math.pow` in favor of the `**` operator.
 *
 * @see [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
 */
export type PreferExponentiationOperatorRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `Math.pow` in favor of the `**` operator.
 *
 * @see [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
 */
export interface PreferExponentiationOperatorRule {
  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator.
   *
   * @see [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
   */
  'prefer-exponentiation-operator': PreferExponentiationOperatorRuleConfig;
}
