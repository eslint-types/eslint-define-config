import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type YieldStarSpacingOption =
  | ('before' | 'after' | 'both' | 'neither')
  | {
      before?: boolean;
      after?: boolean;
    };

/**
 * Options.
 */
export type YieldStarSpacingOptions = [YieldStarSpacingOption?];

/**
 * Require or disallow spacing around the `*` in `yield*` expressions.
 *
 * @see [yield-star-spacing](https://eslint.org/docs/latest/rules/yield-star-spacing)
 */
export type YieldStarSpacingRuleConfig = RuleConfig<YieldStarSpacingOptions>;

/**
 * Require or disallow spacing around the `*` in `yield*` expressions.
 *
 * @see [yield-star-spacing](https://eslint.org/docs/latest/rules/yield-star-spacing)
 */
export interface YieldStarSpacingRule {
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions.
   *
   * @see [yield-star-spacing](https://eslint.org/docs/latest/rules/yield-star-spacing)
   */
  'yield-star-spacing': YieldStarSpacingRuleConfig;
}
