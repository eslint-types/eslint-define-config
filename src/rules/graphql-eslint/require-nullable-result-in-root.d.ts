import type { RuleConfig } from '../rule-config';

/**
 * Require nullable fields in root types.
 *
 * @see [require-nullable-result-in-root](https://github.com/B2o5T/graphql-eslint/blob/master/docs/rules/require-nullable-result-in-root.md)
 */
export type RequireNullableResultInRootRuleConfig = RuleConfig<[]>;

/**
 * Require nullable fields in root types.
 *
 * @see [require-nullable-result-in-root](https://github.com/B2o5T/graphql-eslint/blob/master/docs/rules/require-nullable-result-in-root.md)
 */
export interface RequireNullableResultInRootRule {
  /**
   * Require nullable fields in root types.
   *
   * @see [require-nullable-result-in-root](https://github.com/B2o5T/graphql-eslint/blob/master/docs/rules/require-nullable-result-in-root.md)
   */
  '@graphql-eslint/require-nullable-result-in-root': RequireNullableResultInRootRuleConfig;
}
