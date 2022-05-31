import type { RuleConfig } from '../rule-config';

/**
 * Disallow non-null assertions after an optional chain expression.
 *
 * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
 */
export type NoNonNullAssertedOptionalChainRuleConfig = RuleConfig<[]>;

/**
 * Disallow non-null assertions after an optional chain expression.
 *
 * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
 */
export interface NoNonNullAssertedOptionalChainRule {
  /**
   * Disallow non-null assertions after an optional chain expression.
   *
   * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': NoNonNullAssertedOptionalChainRuleConfig;
}
