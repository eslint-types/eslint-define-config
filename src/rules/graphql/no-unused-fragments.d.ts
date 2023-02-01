import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL document is only valid if all fragment definitions are spread within operations, or spread within other fragments spread within operations.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-unused-fragments](https://the-guild.dev/graphql/eslint/rules/no-unused-fragments)
 */
export type NoUnusedFragmentsRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL document is only valid if all fragment definitions are spread within operations, or spread within other fragments spread within operations.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-unused-fragments](https://the-guild.dev/graphql/eslint/rules/no-unused-fragments)
 */
export interface NoUnusedFragmentsRule {
  /**
 * A GraphQL document is only valid if all fragment definitions are spread within operations, or spread within other fragments spread within operations.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-unused-fragments](https://the-guild.dev/graphql/eslint/rules/no-unused-fragments)
 */
  '@graphql-eslint/no-unused-fragments': NoUnusedFragmentsRuleConfig;
}
