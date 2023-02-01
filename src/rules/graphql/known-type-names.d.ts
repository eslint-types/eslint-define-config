import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL document is only valid if referenced types (specifically variable definitions and fragment conditions) are defined by the type schema.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-type-names](https://the-guild.dev/graphql/eslint/rules/known-type-names)
 */
export type KnownTypeNamesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL document is only valid if referenced types (specifically variable definitions and fragment conditions) are defined by the type schema.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-type-names](https://the-guild.dev/graphql/eslint/rules/known-type-names)
 */
export interface KnownTypeNamesRule {
  /**
 * A GraphQL document is only valid if referenced types (specifically variable definitions and fragment conditions) are defined by the type schema.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-type-names](https://the-guild.dev/graphql/eslint/rules/known-type-names)
 */
  '@graphql-eslint/known-type-names': KnownTypeNamesRuleConfig;
}
