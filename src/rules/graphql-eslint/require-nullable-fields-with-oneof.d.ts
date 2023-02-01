import type { RuleConfig } from '../rule-config';

/**
 * Require `input` or `type` fields to be non-nullable with `@oneOf` directive.
 *
 * @see [require-nullable-fields-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-nullable-fields-with-oneof)
 */
export type RequireNullableFieldsWithOneofRuleConfig = RuleConfig<[]>;

/**
 * Require `input` or `type` fields to be non-nullable with `@oneOf` directive.
 *
 * @see [require-nullable-fields-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-nullable-fields-with-oneof)
 */
export interface RequireNullableFieldsWithOneofRule {
  /**
   * Require `input` or `type` fields to be non-nullable with `@oneOf` directive.
   *
   * @see [require-nullable-fields-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-nullable-fields-with-oneof)
   */
  '@graphql-eslint/require-nullable-fields-with-oneof': RequireNullableFieldsWithOneofRuleConfig;
}
