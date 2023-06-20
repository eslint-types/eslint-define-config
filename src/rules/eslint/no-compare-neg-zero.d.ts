import type { RuleConfig } from '../rule-config';

/**
 * Disallow comparing against -0.
 *
 * @see [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero)
 */
export type NoCompareNegZeroRuleConfig = RuleConfig<[]>;

/**
 * Disallow comparing against -0.
 *
 * @see [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero)
 */
export interface NoCompareNegZeroRule {
  /**
   * Disallow comparing against -0.
   *
   * @see [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero)
   */
  'no-compare-neg-zero': NoCompareNegZeroRuleConfig;
}
