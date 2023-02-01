import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type RequireIdWhenAvailableOption =
  | []
  | [
      {
        fieldName?: AsString | AsArray;
      },
    ];
export type AsString = string;
/**
 * @minItems 1
 */
export type AsArray = [string, ...string[]];

/**
 * Options.
 */
export type RequireIdWhenAvailableOptions = RequireIdWhenAvailableOption;

/**
 * Enforce selecting specific fields when they are available on the GraphQL type.
 *
 * @see [require-id-when-available](https://the-guild.dev/graphql/eslint/rules/require-id-when-available)
 */
export type RequireIdWhenAvailableRuleConfig =
  RuleConfig<RequireIdWhenAvailableOptions>;

/**
 * Enforce selecting specific fields when they are available on the GraphQL type.
 *
 * @see [require-id-when-available](https://the-guild.dev/graphql/eslint/rules/require-id-when-available)
 */
export interface RequireIdWhenAvailableRule {
  /**
   * Enforce selecting specific fields when they are available on the GraphQL type.
   *
   * @see [require-id-when-available](https://the-guild.dev/graphql/eslint/rules/require-id-when-available)
   */
  '@graphql-eslint/require-id-when-available': RequireIdWhenAvailableRuleConfig;
}
