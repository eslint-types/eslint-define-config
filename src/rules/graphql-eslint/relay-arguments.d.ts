import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type RelayArgumentsOption =
  | []
  | [
      {
        /**
         * Enforce including both forward and backward pagination arguments
         */
        includeBoth?: boolean;
      },
    ];

/**
 * Options.
 */
export type RelayArgumentsOptions = RelayArgumentsOption;

/**
 * Set of rules to follow Relay specification for Arguments.

- A field that returns a Connection type must include forward pagination arguments (`first` and `after`), backward pagination arguments (`last` and `before`), or both

Forward pagination arguments

- `first` takes a non-negative integer
- `after` takes the Cursor type

Backward pagination arguments

- `last` takes a non-negative integer
- `before` takes the Cursor type.
 *  
 * @see [relay-arguments](https://the-guild.dev/graphql/eslint/rules/relay-arguments)
 */
export type RelayArgumentsRuleConfig = RuleConfig<RelayArgumentsOptions>;

/**
 * Set of rules to follow Relay specification for Arguments.

- A field that returns a Connection type must include forward pagination arguments (`first` and `after`), backward pagination arguments (`last` and `before`), or both

Forward pagination arguments

- `first` takes a non-negative integer
- `after` takes the Cursor type

Backward pagination arguments

- `last` takes a non-negative integer
- `before` takes the Cursor type.
 *  
 * @see [relay-arguments](https://the-guild.dev/graphql/eslint/rules/relay-arguments)
 */
export interface RelayArgumentsRule {
  /**
 * Set of rules to follow Relay specification for Arguments.

- A field that returns a Connection type must include forward pagination arguments (`first` and `after`), backward pagination arguments (`last` and `before`), or both

Forward pagination arguments

- `first` takes a non-negative integer
- `after` takes the Cursor type

Backward pagination arguments

- `last` takes a non-negative integer
- `before` takes the Cursor type.
 *  
 * @see [relay-arguments](https://the-guild.dev/graphql/eslint/rules/relay-arguments)
 */
  '@graphql-eslint/relay-arguments': RelayArgumentsRuleConfig;
}
