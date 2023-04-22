import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxExpectOption = {
  max: number;
};

/**
 * Options.
 */
export type MaxExpectOptions = [MaxExpectOption?];

/**
 * Enforce a maximum number of expect per test.
 *
 * @see [max-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expect.md)
 */
export type MaxExpectRuleConfig = RuleConfig<MaxExpectOptions>;

/**
 * Enforce a maximum number of expect per test.
 *
 * @see [max-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expect.md)
 */
export interface MaxExpectRule {
  /**
   * Enforce a maximum number of expect per test.
   *
   * @see [max-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expect.md)
   */
  'vitest/max-expect': MaxExpectRuleConfig;
}
