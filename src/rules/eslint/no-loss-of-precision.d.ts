import type { RuleConfig } from '../rule-config';

/**
 * Disallow literal numbers that lose precision.
 *
 * @see [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision)
 */
export type NoLossOfPrecisionRuleConfig = RuleConfig<[]>;

/**
 * Disallow literal numbers that lose precision.
 *
 * @see [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision)
 */
export interface NoLossOfPrecisionRule {
  /**
   * Disallow literal numbers that lose precision.
   *
   * @see [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision)
   */
  'no-loss-of-precision': NoLossOfPrecisionRuleConfig;
}
