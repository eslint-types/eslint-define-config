import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL document is only valid if it has only one type per operation.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-operation-types](https://the-guild.dev/graphql/eslint/rules/unique-operation-types)
 */
export type UniqueOperationTypesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL document is only valid if it has only one type per operation.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-operation-types](https://the-guild.dev/graphql/eslint/rules/unique-operation-types)
 */
export interface UniqueOperationTypesRule {
  /**
 * A GraphQL document is only valid if it has only one type per operation.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-operation-types](https://the-guild.dev/graphql/eslint/rules/unique-operation-types)
 */
  '@graphql-eslint/unique-operation-types': UniqueOperationTypesRuleConfig;
}
