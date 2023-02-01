import type { RuleConfig } from '../rule-config';

/**
 * Set of rules to follow Relay specification for Connection types.

- Any type whose name ends in "Connection" is considered by spec to be a `Connection type`
- Connection type must be an Object type
- Connection type must contain a field `edges` that return a list type that wraps an edge type
- Connection type must contain a field `pageInfo` that return a non-null `PageInfo` Object type.
 *  
 * @see [relay-connection-types](https://the-guild.dev/graphql/eslint/rules/relay-connection-types)
 */
export type RelayConnectionTypesRuleConfig = RuleConfig<[]>;

/**
 * Set of rules to follow Relay specification for Connection types.

- Any type whose name ends in "Connection" is considered by spec to be a `Connection type`
- Connection type must be an Object type
- Connection type must contain a field `edges` that return a list type that wraps an edge type
- Connection type must contain a field `pageInfo` that return a non-null `PageInfo` Object type.
 *  
 * @see [relay-connection-types](https://the-guild.dev/graphql/eslint/rules/relay-connection-types)
 */
export interface RelayConnectionTypesRule {
  /**
 * Set of rules to follow Relay specification for Connection types.

- Any type whose name ends in "Connection" is considered by spec to be a `Connection type`
- Connection type must be an Object type
- Connection type must contain a field `edges` that return a list type that wraps an edge type
- Connection type must contain a field `pageInfo` that return a non-null `PageInfo` Object type.
 *  
 * @see [relay-connection-types](https://the-guild.dev/graphql/eslint/rules/relay-connection-types)
 */
  '@graphql-eslint/relay-connection-types': RelayConnectionTypesRuleConfig;
}
