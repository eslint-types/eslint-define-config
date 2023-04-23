import type { RuleConfig } from '../rule-config';

/**
 * Require toThrow() to be called with an error message.
 *
 * @see [require-to-throw-message](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md)
 */
export type RequireToThrowMessageRuleConfig = RuleConfig<[]>;

/**
 * Require toThrow() to be called with an error message.
 *
 * @see [require-to-throw-message](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md)
 */
export interface RequireToThrowMessageRule {
  /**
   * Require toThrow() to be called with an error message.
   *
   * @see [require-to-throw-message](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md)
   */
  'vitest/require-to-throw-message': RequireToThrowMessageRuleConfig;
}
