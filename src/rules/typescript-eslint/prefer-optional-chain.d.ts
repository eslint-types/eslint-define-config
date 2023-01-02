import type { RuleConfig } from '../rule-config';

/**
 * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
 *
 * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
 */
export type PreferOptionalChainRuleConfig = RuleConfig<[]>;

/**
 * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
 *
 * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
 */
export interface PreferOptionalChainRule {
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
   *
   * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
   */
  '@typescript-eslint/prefer-optional-chain': PreferOptionalChainRuleConfig;
}
