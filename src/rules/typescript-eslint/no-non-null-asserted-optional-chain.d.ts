import type { RuleConfig } from '../rule-config';

/**
 * Disallows using a non-null assertion after an optional chain expression.
 *
 * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
 */
export type NoNonNullAssertedOptionalChainRuleConfig = RuleConfig<[]>;

/**
 * Disallows using a non-null assertion after an optional chain expression.
 *
 * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
 */
export interface NoNonNullAssertedOptionalChainRule {
  /**
   * Disallows using a non-null assertion after an optional chain expression.
   *
   * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': NoNonNullAssertedOptionalChainRuleConfig;
}
