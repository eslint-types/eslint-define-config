import type { RuleConfig } from '../rule-config';

/**
 * Variables passed to field arguments conform to type.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [variables-in-allowed-position](https://the-guild.dev/graphql/eslint/rules/variables-in-allowed-position)
 */
export type VariablesInAllowedPositionRuleConfig = RuleConfig<[]>;

/**
 * Variables passed to field arguments conform to type.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [variables-in-allowed-position](https://the-guild.dev/graphql/eslint/rules/variables-in-allowed-position)
 */
export interface VariablesInAllowedPositionRule {
  /**
 * Variables passed to field arguments conform to type.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [variables-in-allowed-position](https://the-guild.dev/graphql/eslint/rules/variables-in-allowed-position)
 */
  '@graphql-eslint/variables-in-allowed-position': VariablesInAllowedPositionRuleConfig;
}
