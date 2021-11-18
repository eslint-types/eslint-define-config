import type { RuleConfig } from '../rule-config';

/**
 * Prefer using concise optional chain expressions instead of chained logical ands.
 *
 * @see [prefer-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)
 */
export type PreferOptionalChainRuleConfig = RuleConfig<[]>;

/**
 * Prefer using concise optional chain expressions instead of chained logical ands.
 *
 * @see [prefer-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)
 */
export interface PreferOptionalChainRule {
  /**
   * Prefer using concise optional chain expressions instead of chained logical ands.
   *
   * @see [prefer-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)
   */
  '@typescript-eslint/prefer-optional-chain': PreferOptionalChainRuleConfig;
}
