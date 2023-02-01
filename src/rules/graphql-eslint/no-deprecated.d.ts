import type { RuleConfig } from '../rule-config';

/**
 * Enforce that deprecated fields or enum values are not in use by operations.
 *
 * @see [no-deprecated](https://the-guild.dev/graphql/eslint/rules/no-deprecated)
 */
export type NoDeprecatedRuleConfig = RuleConfig<[]>;

/**
 * Enforce that deprecated fields or enum values are not in use by operations.
 *
 * @see [no-deprecated](https://the-guild.dev/graphql/eslint/rules/no-deprecated)
 */
export interface NoDeprecatedRule {
  /**
   * Enforce that deprecated fields or enum values are not in use by operations.
   *
   * @see [no-deprecated](https://the-guild.dev/graphql/eslint/rules/no-deprecated)
   */
  '@graphql-eslint/no-deprecated': NoDeprecatedRuleConfig;
}
