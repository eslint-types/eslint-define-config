import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL document is only valid if it contains only one schema definition.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [lone-schema-definition](https://the-guild.dev/graphql/eslint/rules/lone-schema-definition)
 */
export type LoneSchemaDefinitionRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL document is only valid if it contains only one schema definition.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [lone-schema-definition](https://the-guild.dev/graphql/eslint/rules/lone-schema-definition)
 */
export interface LoneSchemaDefinitionRule {
  /**
 * A GraphQL document is only valid if it contains only one schema definition.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [lone-schema-definition](https://the-guild.dev/graphql/eslint/rules/lone-schema-definition)
 */
  '@graphql-eslint/lone-schema-definition': LoneSchemaDefinitionRuleConfig;
}
