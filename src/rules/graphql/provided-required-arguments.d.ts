import type { RuleConfig } from '../rule-config';

/**
 * A field or directive is only valid if all required (non-null without a default value) field arguments have been provided.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [provided-required-arguments](https://the-guild.dev/graphql/eslint/rules/provided-required-arguments)
 */
export type ProvidedRequiredArgumentsRuleConfig = RuleConfig<[]>;

/**
 * A field or directive is only valid if all required (non-null without a default value) field arguments have been provided.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [provided-required-arguments](https://the-guild.dev/graphql/eslint/rules/provided-required-arguments)
 */
export interface ProvidedRequiredArgumentsRule {
  /**
 * A field or directive is only valid if all required (non-null without a default value) field arguments have been provided.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [provided-required-arguments](https://the-guild.dev/graphql/eslint/rules/provided-required-arguments)
 */
  '@graphql-eslint/provided-required-arguments': ProvidedRequiredArgumentsRuleConfig;
}
