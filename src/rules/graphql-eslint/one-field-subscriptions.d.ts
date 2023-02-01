import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL subscription is valid only if it contains a single root field.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [one-field-subscriptions](https://the-guild.dev/graphql/eslint/rules/one-field-subscriptions)
 */
export type OneFieldSubscriptionsRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL subscription is valid only if it contains a single root field.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [one-field-subscriptions](https://the-guild.dev/graphql/eslint/rules/one-field-subscriptions)
 */
export interface OneFieldSubscriptionsRule {
  /**
 * A GraphQL subscription is valid only if it contains a single root field.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [one-field-subscriptions](https://the-guild.dev/graphql/eslint/rules/one-field-subscriptions)
 */
  '@graphql-eslint/one-field-subscriptions': OneFieldSubscriptionsRuleConfig;
}
