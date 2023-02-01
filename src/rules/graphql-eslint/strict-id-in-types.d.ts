import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type StrictIdInTypesOption =
  | []
  | [
      {
        /**
         * @minItems 1
         */
        acceptedIdNames?: [string, ...string[]];
        /**
         * @minItems 1
         */
        acceptedIdTypes?: [string, ...string[]];
        exceptions?: {
          /**
           * This is used to exclude types with names that match one of the specified values.
           *
           * @minItems 1
           */
          types?: [string, ...string[]];
          /**
           * This is used to exclude types with names with suffixes that match one of the specified values.
           *
           * @minItems 1
           */
          suffixes?: [string, ...string[]];
        };
      },
    ];

/**
 * Options.
 */
export type StrictIdInTypesOptions = StrictIdInTypesOption;

/**
 * Requires output types to have one unique identifier unless they do not have a logical one. Exceptions can be used to ignore output types that do not have unique identifiers.
 *
 * @see [strict-id-in-types](https://the-guild.dev/graphql/eslint/rules/strict-id-in-types)
 */
export type StrictIdInTypesRuleConfig = RuleConfig<StrictIdInTypesOptions>;

/**
 * Requires output types to have one unique identifier unless they do not have a logical one. Exceptions can be used to ignore output types that do not have unique identifiers.
 *
 * @see [strict-id-in-types](https://the-guild.dev/graphql/eslint/rules/strict-id-in-types)
 */
export interface StrictIdInTypesRule {
  /**
   * Requires output types to have one unique identifier unless they do not have a logical one. Exceptions can be used to ignore output types that do not have unique identifiers.
   *
   * @see [strict-id-in-types](https://the-guild.dev/graphql/eslint/rules/strict-id-in-types)
   */
  '@graphql-eslint/strict-id-in-types': StrictIdInTypesRuleConfig;
}
