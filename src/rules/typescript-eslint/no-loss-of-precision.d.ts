import type { RuleConfig } from '../rule-config';

/**
 * Disallow literal numbers that lose precision.
 *
 * @see [no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)
 */
export type NoLossOfPrecisionRuleConfig = RuleConfig<[]>;

/**
 * Disallow literal numbers that lose precision.
 *
 * @see [no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)
 */
export interface NoLossOfPrecisionRule {
  /**
   * Disallow literal numbers that lose precision.
   *
   * @see [no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)
   */
  '@typescript-eslint/no-loss-of-precision': NoLossOfPrecisionRuleConfig;
}
