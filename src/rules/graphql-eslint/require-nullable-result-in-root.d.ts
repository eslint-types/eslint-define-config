import type { RuleConfig } from '../rule-config';

/**
 * Require nullable fields in root types.
 *
 * @see [require-nullable-result-in-root](https://the-guild.dev/graphql/eslint/rules/require-nullable-result-in-root)
 */
export type RequireNullableResultInRootRuleConfig = RuleConfig<[]>;

/**
 * Require nullable fields in root types.
 *
 * @see [require-nullable-result-in-root](https://the-guild.dev/graphql/eslint/rules/require-nullable-result-in-root)
 */
export interface RequireNullableResultInRootRule {
  /**
   * Require nullable fields in root types.
   *
   * @see [require-nullable-result-in-root](https://the-guild.dev/graphql/eslint/rules/require-nullable-result-in-root)
   */
  '@graphql-eslint/require-nullable-result-in-root': RequireNullableResultInRootRuleConfig;
}
