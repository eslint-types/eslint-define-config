import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL operation is only valid if all variables encountered, both directly and via fragment spreads, are defined by that operation.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-undefined-variables](https://the-guild.dev/graphql/eslint/rules/no-undefined-variables)
 */
export type NoUndefinedVariablesRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL operation is only valid if all variables encountered, both directly and via fragment spreads, are defined by that operation.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-undefined-variables](https://the-guild.dev/graphql/eslint/rules/no-undefined-variables)
 */
export interface NoUndefinedVariablesRule {
  /**
 * A GraphQL operation is only valid if all variables encountered, both directly and via fragment spreads, are defined by that operation.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-undefined-variables](https://the-guild.dev/graphql/eslint/rules/no-undefined-variables)
 */
  '@graphql-eslint/no-undefined-variables': NoUndefinedVariablesRuleConfig;
}
