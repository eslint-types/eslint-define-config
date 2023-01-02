import type { RuleConfig } from '../rule-config';

/**
 * Disallow a `eslint-enable` comment for multiple `eslint-disable` comments.
 *
 * @see [no-aggregating-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html)
 */
export type NoAggregatingEnableRuleConfig = RuleConfig<[]>;

/**
 * Disallow a `eslint-enable` comment for multiple `eslint-disable` comments.
 *
 * @see [no-aggregating-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html)
 */
export interface NoAggregatingEnableRule {
  /**
   * Disallow a `eslint-enable` comment for multiple `eslint-disable` comments.
   *
   * @see [no-aggregating-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html)
   */
  'eslint-comments/no-aggregating-enable': NoAggregatingEnableRuleConfig;
}
