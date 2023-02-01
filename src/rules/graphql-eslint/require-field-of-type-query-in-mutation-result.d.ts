import type { RuleConfig } from '../rule-config';

/**
 * Allow the client in one round-trip not only to call mutation but also to get a wagon of data to update their application.
> Currently, no errors are reported for result type `union`, `interface` and `scalar`.
 *  
 * @see [require-field-of-type-query-in-mutation-result](https://the-guild.dev/graphql/eslint/rules/require-field-of-type-query-in-mutation-result)
 */
export type RequireFieldOfTypeQueryInMutationResultRuleConfig = RuleConfig<[]>;

/**
 * Allow the client in one round-trip not only to call mutation but also to get a wagon of data to update their application.
> Currently, no errors are reported for result type `union`, `interface` and `scalar`.
 *  
 * @see [require-field-of-type-query-in-mutation-result](https://the-guild.dev/graphql/eslint/rules/require-field-of-type-query-in-mutation-result)
 */
export interface RequireFieldOfTypeQueryInMutationResultRule {
  /**
 * Allow the client in one round-trip not only to call mutation but also to get a wagon of data to update their application.
> Currently, no errors are reported for result type `union`, `interface` and `scalar`.
 *  
 * @see [require-field-of-type-query-in-mutation-result](https://the-guild.dev/graphql/eslint/rules/require-field-of-type-query-in-mutation-result)
 */
  '@graphql-eslint/require-field-of-type-query-in-mutation-result': RequireFieldOfTypeQueryInMutationResultRuleConfig;
}
