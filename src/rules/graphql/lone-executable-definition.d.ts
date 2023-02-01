import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type LoneExecutableDefinitionOption =
  | []
  | [
      {
        /**
         * Allow certain definitions to be placed alongside others.
         *
         * @minItems 1
         * @maxItems 3
         */
        ignore?:
          | ['fragment' | 'query' | 'mutation' | 'subscription']
          | [
              'fragment' | 'query' | 'mutation' | 'subscription',
              'fragment' | 'query' | 'mutation' | 'subscription',
            ]
          | [
              'fragment' | 'query' | 'mutation' | 'subscription',
              'fragment' | 'query' | 'mutation' | 'subscription',
              'fragment' | 'query' | 'mutation' | 'subscription',
            ];
      },
    ];

/**
 * Options.
 */
export type LoneExecutableDefinitionOptions = LoneExecutableDefinitionOption;

/**
 * Require queries, mutations, subscriptions or fragments to be located in separate files.
 *
 * @see [lone-executable-definition](https://the-guild.dev/graphql/eslint/rules/lone-executable-definition)
 */
export type LoneExecutableDefinitionRuleConfig =
  RuleConfig<LoneExecutableDefinitionOptions>;

/**
 * Require queries, mutations, subscriptions or fragments to be located in separate files.
 *
 * @see [lone-executable-definition](https://the-guild.dev/graphql/eslint/rules/lone-executable-definition)
 */
export interface LoneExecutableDefinitionRule {
  /**
   * Require queries, mutations, subscriptions or fragments to be located in separate files.
   *
   * @see [lone-executable-definition](https://the-guild.dev/graphql/eslint/rules/lone-executable-definition)
   */
  '@graphql-eslint/lone-executable-definition': LoneExecutableDefinitionRuleConfig;
}
