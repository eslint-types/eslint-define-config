import type { RuleConfig } from '../rule-config';

/**
 * Enforces users to avoid using the type name in a field name while defining your schema.
 *
 * @see [no-typename-prefix](https://the-guild.dev/graphql/eslint/rules/no-typename-prefix)
 */
export type NoTypenamePrefixRuleConfig = RuleConfig<[]>;

/**
 * Enforces users to avoid using the type name in a field name while defining your schema.
 *
 * @see [no-typename-prefix](https://the-guild.dev/graphql/eslint/rules/no-typename-prefix)
 */
export interface NoTypenamePrefixRule {
  /**
   * Enforces users to avoid using the type name in a field name while defining your schema.
   *
   * @see [no-typename-prefix](https://the-guild.dev/graphql/eslint/rules/no-typename-prefix)
   */
  '@graphql-eslint/no-typename-prefix': NoTypenamePrefixRuleConfig;
}
