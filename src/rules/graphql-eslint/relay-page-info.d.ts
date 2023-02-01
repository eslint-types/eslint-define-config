import type { RuleConfig } from '../rule-config';

/**
 * Set of rules to follow Relay specification for `PageInfo` object.

- `PageInfo` must be an Object type
- `PageInfo` must contain fields `hasPreviousPage` and `hasNextPage`, that return non-null Boolean
- `PageInfo` must contain fields `startCursor` and `endCursor`, that return either String or Scalar, which can be null if there are no results.
 *  
 * @see [relay-page-info](https://the-guild.dev/graphql/eslint/rules/relay-page-info)
 */
export type RelayPageInfoRuleConfig = RuleConfig<[]>;

/**
 * Set of rules to follow Relay specification for `PageInfo` object.

- `PageInfo` must be an Object type
- `PageInfo` must contain fields `hasPreviousPage` and `hasNextPage`, that return non-null Boolean
- `PageInfo` must contain fields `startCursor` and `endCursor`, that return either String or Scalar, which can be null if there are no results.
 *  
 * @see [relay-page-info](https://the-guild.dev/graphql/eslint/rules/relay-page-info)
 */
export interface RelayPageInfoRule {
  /**
 * Set of rules to follow Relay specification for `PageInfo` object.

- `PageInfo` must be an Object type
- `PageInfo` must contain fields `hasPreviousPage` and `hasNextPage`, that return non-null Boolean
- `PageInfo` must contain fields `startCursor` and `endCursor`, that return either String or Scalar, which can be null if there are no results.
 *  
 * @see [relay-page-info](https://the-guild.dev/graphql/eslint/rules/relay-page-info)
 */
  '@graphql-eslint/relay-page-info': RelayPageInfoRuleConfig;
}
