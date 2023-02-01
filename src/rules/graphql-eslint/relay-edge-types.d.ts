import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type RelayEdgeTypesOption =
  | []
  | [
      {
        /**
         * Edge type name must end in "Edge".
         */
        withEdgeSuffix?: boolean;
        /**
         * Edge type's field `node` must implement `Node` interface.
         */
        shouldImplementNode?: boolean;
        /**
         * A list type should only wrap an edge type.
         */
        listTypeCanWrapOnlyEdgeType?: boolean;
      },
    ];

/**
 * Options.
 */
export type RelayEdgeTypesOptions = RelayEdgeTypesOption;

/**
 * Set of rules to follow Relay specification for Edge types.

- A type that is returned in list form by a connection type's `edges` field is considered by this spec to be an Edge type
- Edge type must be an Object type
- Edge type must contain a field `node` that return either Scalar, Enum, Object, Interface, Union, or a non-null wrapper around one of those types. Notably, this field cannot return a list
- Edge type must contain a field `cursor` that return either String, Scalar, or a non-null wrapper around one of those types
- Edge type name must end in "Edge" _(optional)_
- Edge type's field `node` must implement `Node` interface _(optional)_
- A list type should only wrap an edge type _(optional)_.
 *  
 * @see [relay-edge-types](https://the-guild.dev/graphql/eslint/rules/relay-edge-types)
 */
export type RelayEdgeTypesRuleConfig = RuleConfig<RelayEdgeTypesOptions>;

/**
 * Set of rules to follow Relay specification for Edge types.

- A type that is returned in list form by a connection type's `edges` field is considered by this spec to be an Edge type
- Edge type must be an Object type
- Edge type must contain a field `node` that return either Scalar, Enum, Object, Interface, Union, or a non-null wrapper around one of those types. Notably, this field cannot return a list
- Edge type must contain a field `cursor` that return either String, Scalar, or a non-null wrapper around one of those types
- Edge type name must end in "Edge" _(optional)_
- Edge type's field `node` must implement `Node` interface _(optional)_
- A list type should only wrap an edge type _(optional)_.
 *  
 * @see [relay-edge-types](https://the-guild.dev/graphql/eslint/rules/relay-edge-types)
 */
export interface RelayEdgeTypesRule {
  /**
 * Set of rules to follow Relay specification for Edge types.

- A type that is returned in list form by a connection type's `edges` field is considered by this spec to be an Edge type
- Edge type must be an Object type
- Edge type must contain a field `node` that return either Scalar, Enum, Object, Interface, Union, or a non-null wrapper around one of those types. Notably, this field cannot return a list
- Edge type must contain a field `cursor` that return either String, Scalar, or a non-null wrapper around one of those types
- Edge type name must end in "Edge" _(optional)_
- Edge type's field `node` must implement `Node` interface _(optional)_
- A list type should only wrap an edge type _(optional)_.
 *  
 * @see [relay-edge-types](https://the-guild.dev/graphql/eslint/rules/relay-edge-types)
 */
  '@graphql-eslint/relay-edge-types': RelayEdgeTypesRuleConfig;
}
