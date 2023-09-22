import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExpectExpectOption {
  customExpressions?: any[];
}

/**
 * Options.
 */
export type ExpectExpectOptions = [ExpectExpectOption?];

/**
 * Enforce having expectation in test body.
 *
 * @see [expect-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md)
 */
export type ExpectExpectRuleConfig = RuleConfig<ExpectExpectOptions>;

/**
 * Enforce having expectation in test body.
 *
 * @see [expect-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md)
 */
export interface ExpectExpectRule {
  /**
   * Enforce having expectation in test body.
   *
   * @see [expect-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md)
   */
  'vitest/expect-expect': ExpectExpectRuleConfig;
}
