import type { RuleConfig } from '../rule-config';

/**
 * Require name for your GraphQL operations. This is useful since most GraphQL client libraries are using the operation name for caching purposes.
 *
 * @see [no-anonymous-operations](https://the-guild.dev/graphql/eslint/rules/no-anonymous-operations)
 */
export type NoAnonymousOperationsRuleConfig = RuleConfig<[]>;

/**
 * Require name for your GraphQL operations. This is useful since most GraphQL client libraries are using the operation name for caching purposes.
 *
 * @see [no-anonymous-operations](https://the-guild.dev/graphql/eslint/rules/no-anonymous-operations)
 */
export interface NoAnonymousOperationsRule {
  /**
   * Require name for your GraphQL operations. This is useful since most GraphQL client libraries are using the operation name for caching purposes.
   *
   * @see [no-anonymous-operations](https://the-guild.dev/graphql/eslint/rules/no-anonymous-operations)
   */
  '@graphql-eslint/no-anonymous-operations': NoAnonymousOperationsRuleConfig;
}
