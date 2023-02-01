import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL document is only valid for execution if all definitions are either operation or fragment definitions.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [executable-definitions](https://the-guild.dev/graphql/eslint/rules/executable-definitions)
 */
export type ExecutableDefinitionsRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL document is only valid for execution if all definitions are either operation or fragment definitions.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [executable-definitions](https://the-guild.dev/graphql/eslint/rules/executable-definitions)
 */
export interface ExecutableDefinitionsRule {
  /**
 * A GraphQL document is only valid for execution if all definitions are either operation or fragment definitions.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [executable-definitions](https://the-guild.dev/graphql/eslint/rules/executable-definitions)
 */
  '@graphql-eslint/executable-definitions': ExecutableDefinitionsRuleConfig;
}
