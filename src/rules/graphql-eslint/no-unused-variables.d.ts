import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL operation is only valid if all variables defined by an operation are used, either directly or within a spread fragment.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-unused-variables](https://the-guild.dev/graphql/eslint/rules/no-unused-variables)
 */
export type NoUnusedVariablesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL operation is only valid if all variables defined by an operation are used, either directly or within a spread fragment.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-unused-variables](https://the-guild.dev/graphql/eslint/rules/no-unused-variables)
 */
export interface NoUnusedVariablesRule {
  /**
 * A GraphQL operation is only valid if all variables defined by an operation are used, either directly or within a spread fragment.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-unused-variables](https://the-guild.dev/graphql/eslint/rules/no-unused-variables)
 */
  '@graphql-eslint/no-unused-variables': NoUnusedVariablesRuleConfig;
}
