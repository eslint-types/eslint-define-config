import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type KnownDirectivesOption =
  | []
  | [
      {
        /**
         * @minItems 1
         */
        ignoreClientDirectives: [string, ...string[]];
      },
    ];

/**
 * Options.
 */
export type KnownDirectivesOptions = KnownDirectivesOption;

/**
 * A GraphQL document is only valid if all `@directive`s are known by the schema and legally positioned.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-directives](https://the-guild.dev/graphql/eslint/rules/known-directives)
 */
export type KnownDirectivesRuleConfig = RuleConfig<KnownDirectivesOptions>;

/**
 * A GraphQL document is only valid if all `@directive`s are known by the schema and legally positioned.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-directives](https://the-guild.dev/graphql/eslint/rules/known-directives)
 */
export interface KnownDirectivesRule {
  /**
 * A GraphQL document is only valid if all `@directive`s are known by the schema and legally positioned.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-directives](https://the-guild.dev/graphql/eslint/rules/known-directives)
 */
  '@graphql-eslint/known-directives': KnownDirectivesRuleConfig;
}
