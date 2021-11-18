import type { RuleConfig } from '../rule-config';

/**
 * Disallow literal numbers that lose precision.
 *
 * @see [no-loss-of-precision](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)
 */
export type NoLossOfPrecisionRuleConfig = RuleConfig<[]>;

/**
 * Disallow literal numbers that lose precision.
 *
 * @see [no-loss-of-precision](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)
 */
export interface NoLossOfPrecisionRule {
  /**
   * Disallow literal numbers that lose precision.
   *
   * @see [no-loss-of-precision](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)
   */
  '@typescript-eslint/no-loss-of-precision': NoLossOfPrecisionRuleConfig;
}
