import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL complex type is only valid if all its fields are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-field-definition-names](https://the-guild.dev/graphql/eslint/rules/unique-field-definition-names)
 */
export type UniqueFieldDefinitionNamesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL complex type is only valid if all its fields are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-field-definition-names](https://the-guild.dev/graphql/eslint/rules/unique-field-definition-names)
 */
export interface UniqueFieldDefinitionNamesRule {
  /**
 * A GraphQL complex type is only valid if all its fields are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-field-definition-names](https://the-guild.dev/graphql/eslint/rules/unique-field-definition-names)
 */
  '@graphql-eslint/unique-field-definition-names': UniqueFieldDefinitionNamesRuleConfig;
}
