import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 1
 * @maxItems 1
 */
export type SelectionSetDepthOption = [
  {
    maxDepth: number;
    /**
     * @minItems 1
     */
    ignore?: [string, ...string[]];
  },
];

/**
 * Options.
 */
export type SelectionSetDepthOptions = SelectionSetDepthOption;

/**
 * Limit the complexity of the GraphQL operations solely by their depth. Based on [graphql-depth-limit](https://npmjs.com/package/graphql-depth-limit).
 *
 * @see [selection-set-depth](https://the-guild.dev/graphql/eslint/rules/selection-set-depth)
 */
export type SelectionSetDepthRuleConfig = RuleConfig<SelectionSetDepthOptions>;

/**
 * Limit the complexity of the GraphQL operations solely by their depth. Based on [graphql-depth-limit](https://npmjs.com/package/graphql-depth-limit).
 *
 * @see [selection-set-depth](https://the-guild.dev/graphql/eslint/rules/selection-set-depth)
 */
export interface SelectionSetDepthRule {
  /**
   * Limit the complexity of the GraphQL operations solely by their depth. Based on [graphql-depth-limit](https://npmjs.com/package/graphql-depth-limit).
   *
   * @see [selection-set-depth](https://the-guild.dev/graphql/eslint/rules/selection-set-depth)
   */
  '@graphql-eslint/selection-set-depth': SelectionSetDepthRuleConfig;
}
