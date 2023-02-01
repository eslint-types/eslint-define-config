import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRootTypeOption = [
  {
    /**
     * @minItems 1
     */
    disallow: ['mutation' | 'subscription', ...('mutation' | 'subscription')[]];
  },
];

/**
 * Options.
 */
export type NoRootTypeOptions = NoRootTypeOption;

/**
 * Disallow using root types `mutation` and/or `subscription`.
 *
 * @see [no-root-type](https://the-guild.dev/graphql/eslint/rules/no-root-type)
 */
export type NoRootTypeRuleConfig = RuleConfig<NoRootTypeOptions>;

/**
 * Disallow using root types `mutation` and/or `subscription`.
 *
 * @see [no-root-type](https://the-guild.dev/graphql/eslint/rules/no-root-type)
 */
export interface NoRootTypeRule {
  /**
   * Disallow using root types `mutation` and/or `subscription`.
   *
   * @see [no-root-type](https://the-guild.dev/graphql/eslint/rules/no-root-type)
   */
  '@graphql-eslint/no-root-type': NoRootTypeRuleConfig;
}
