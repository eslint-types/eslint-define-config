import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type DescriptionStyleOption =
  | []
  | [
      {
        style?: 'block' | 'inline';
      },
    ];

/**
 * Options.
 */
export type DescriptionStyleOptions = DescriptionStyleOption;

/**
 * Require all comments to follow the same style (either block or inline).
 *
 * @see [description-style](https://the-guild.dev/graphql/eslint/rules/description-style)
 */
export type DescriptionStyleRuleConfig = RuleConfig<DescriptionStyleOptions>;

/**
 * Require all comments to follow the same style (either block or inline).
 *
 * @see [description-style](https://the-guild.dev/graphql/eslint/rules/description-style)
 */
export interface DescriptionStyleRule {
  /**
   * Require all comments to follow the same style (either block or inline).
   *
   * @see [description-style](https://the-guild.dev/graphql/eslint/rules/description-style)
   */
  '@graphql-eslint/description-style': DescriptionStyleRuleConfig;
}
