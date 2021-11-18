import type { RuleConfig } from '../rule-config';

/**
 * Disallows using a non-null assertion after an optional chain expression.
 *
 * @see [no-non-null-asserted-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md)
 */
export type NoNonNullAssertedOptionalChainRuleConfig = RuleConfig<[]>;

/**
 * Disallows using a non-null assertion after an optional chain expression.
 *
 * @see [no-non-null-asserted-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md)
 */
export interface NoNonNullAssertedOptionalChainRule {
  /**
   * Disallows using a non-null assertion after an optional chain expression.
   *
   * @see [no-non-null-asserted-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md)
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': NoNonNullAssertedOptionalChainRuleConfig;
}
