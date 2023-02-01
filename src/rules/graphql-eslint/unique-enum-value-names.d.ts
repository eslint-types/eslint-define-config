import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL enum type is only valid if all its values are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-enum-value-names](https://the-guild.dev/graphql/eslint/rules/unique-enum-value-names)
 */
export type UniqueEnumValueNamesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL enum type is only valid if all its values are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-enum-value-names](https://the-guild.dev/graphql/eslint/rules/unique-enum-value-names)
 */
export interface UniqueEnumValueNamesRule {
  /**
 * A GraphQL enum type is only valid if all its values are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-enum-value-names](https://the-guild.dev/graphql/eslint/rules/unique-enum-value-names)
 */
  '@graphql-eslint/unique-enum-value-names': UniqueEnumValueNamesRuleConfig;
}
