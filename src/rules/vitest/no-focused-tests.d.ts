import type { RuleConfig } from '../rule-config';

/**
 * Disallow focused tests.
 *
 * @see [no-focused-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
 */
export type NoFocusedTestsRuleConfig = RuleConfig<[]>;

/**
 * Disallow focused tests.
 *
 * @see [no-focused-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
 */
export interface NoFocusedTestsRule {
  /**
   * Disallow focused tests.
   *
   * @see [no-focused-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
   */
  'vitest/no-focused-tests': NoFocusedTestsRuleConfig;
}
