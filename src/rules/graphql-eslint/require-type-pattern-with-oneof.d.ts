import type { RuleConfig } from '../rule-config';

/**
 * Enforce types with `@oneOf` directive have `error` and `ok` fields.
 *
 * @see [require-type-pattern-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-type-pattern-with-oneof)
 */
export type RequireTypePatternWithOneofRuleConfig = RuleConfig<[]>;

/**
 * Enforce types with `@oneOf` directive have `error` and `ok` fields.
 *
 * @see [require-type-pattern-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-type-pattern-with-oneof)
 */
export interface RequireTypePatternWithOneofRule {
  /**
   * Enforce types with `@oneOf` directive have `error` and `ok` fields.
   *
   * @see [require-type-pattern-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-type-pattern-with-oneof)
   */
  '@graphql-eslint/require-type-pattern-with-oneof': RequireTypePatternWithOneofRuleConfig;
}
