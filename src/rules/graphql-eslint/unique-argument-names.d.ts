import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL field or directive is only valid if all supplied arguments are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-argument-names](https://the-guild.dev/graphql/eslint/rules/unique-argument-names)
 */
export type UniqueArgumentNamesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL field or directive is only valid if all supplied arguments are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-argument-names](https://the-guild.dev/graphql/eslint/rules/unique-argument-names)
 */
export interface UniqueArgumentNamesRule {
  /**
 * A GraphQL field or directive is only valid if all supplied arguments are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-argument-names](https://the-guild.dev/graphql/eslint/rules/unique-argument-names)
 */
  '@graphql-eslint/unique-argument-names': UniqueArgumentNamesRuleConfig;
}
