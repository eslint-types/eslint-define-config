import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL field is only valid if all supplied arguments are defined by that field.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-argument-names](https://the-guild.dev/graphql/eslint/rules/known-argument-names)
 */
export type KnownArgumentNamesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL field is only valid if all supplied arguments are defined by that field.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-argument-names](https://the-guild.dev/graphql/eslint/rules/known-argument-names)
 */
export interface KnownArgumentNamesRule {
  /**
 * A GraphQL field is only valid if all supplied arguments are defined by that field.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-argument-names](https://the-guild.dev/graphql/eslint/rules/known-argument-names)
 */
  '@graphql-eslint/known-argument-names': KnownArgumentNamesRuleConfig;
}
