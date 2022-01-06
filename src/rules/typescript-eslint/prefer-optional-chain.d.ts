import type { RuleConfig } from '../rule-config';

/**
 * Prefer using concise optional chain expressions instead of chained logical ands.
 *
 * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
 */
export type PreferOptionalChainRuleConfig = RuleConfig<[]>;

/**
 * Prefer using concise optional chain expressions instead of chained logical ands.
 *
 * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
 */
export interface PreferOptionalChainRule {
  /**
   * Prefer using concise optional chain expressions instead of chained logical ands.
   *
   * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
   */
  '@typescript-eslint/prefer-optional-chain': PreferOptionalChainRuleConfig;
}
