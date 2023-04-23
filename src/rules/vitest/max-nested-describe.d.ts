import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MaxNestedDescribeOption {
  max?: number;
}

/**
 * Options.
 */
export type MaxNestedDescribeOptions = [MaxNestedDescribeOption?];

/**
 * Nested describe block should be less than set max value or default value.
 *
 * @see [max-nested-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md)
 */
export type MaxNestedDescribeRuleConfig = RuleConfig<MaxNestedDescribeOptions>;

/**
 * Nested describe block should be less than set max value or default value.
 *
 * @see [max-nested-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md)
 */
export interface MaxNestedDescribeRule {
  /**
   * Nested describe block should be less than set max value or default value.
   *
   * @see [max-nested-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md)
   */
  'vitest/max-nested-describe': MaxNestedDescribeRuleConfig;
}
