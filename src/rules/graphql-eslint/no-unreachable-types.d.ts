import type { RuleConfig } from '../rule-config';

/**
 * Requires all types to be reachable at some level by root level fields.
 *
 * @see [no-unreachable-types](https://the-guild.dev/graphql/eslint/rules/no-unreachable-types)
 */
export type NoUnreachableTypesRuleConfig = RuleConfig<[]>;

/**
 * Requires all types to be reachable at some level by root level fields.
 *
 * @see [no-unreachable-types](https://the-guild.dev/graphql/eslint/rules/no-unreachable-types)
 */
export interface NoUnreachableTypesRule {
  /**
   * Requires all types to be reachable at some level by root level fields.
   *
   * @see [no-unreachable-types](https://the-guild.dev/graphql/eslint/rules/no-unreachable-types)
   */
  '@graphql-eslint/no-unreachable-types': NoUnreachableTypesRuleConfig;
}
