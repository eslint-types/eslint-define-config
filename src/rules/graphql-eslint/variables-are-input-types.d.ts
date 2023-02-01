import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL operation is only valid if all the variables it defines are of input types (scalar, enum, or input object).
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [variables-are-input-types](https://the-guild.dev/graphql/eslint/rules/variables-are-input-types)
 */
export type VariablesAreInputTypesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL operation is only valid if all the variables it defines are of input types (scalar, enum, or input object).
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [variables-are-input-types](https://the-guild.dev/graphql/eslint/rules/variables-are-input-types)
 */
export interface VariablesAreInputTypesRule {
  /**
 * A GraphQL operation is only valid if all the variables it defines are of input types (scalar, enum, or input object).
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [variables-are-input-types](https://the-guild.dev/graphql/eslint/rules/variables-are-input-types)
 */
  '@graphql-eslint/variables-are-input-types': VariablesAreInputTypesRuleConfig;
}
