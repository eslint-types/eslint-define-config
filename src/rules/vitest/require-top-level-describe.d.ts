import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireTopLevelDescribeOption {
  maxNumberOfTopLevelDescribes?: number;
}

/**
 * Options.
 */
export type RequireTopLevelDescribeOptions = [RequireTopLevelDescribeOption?];

/**
 * Enforce that all tests are in a top-level describe.
 *
 * @see [require-top-level-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md)
 */
export type RequireTopLevelDescribeRuleConfig =
  RuleConfig<RequireTopLevelDescribeOptions>;

/**
 * Enforce that all tests are in a top-level describe.
 *
 * @see [require-top-level-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md)
 */
export interface RequireTopLevelDescribeRule {
  /**
   * Enforce that all tests are in a top-level describe.
   *
   * @see [require-top-level-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md)
   */
  'vitest/require-top-level-describe': RequireTopLevelDescribeRuleConfig;
}
