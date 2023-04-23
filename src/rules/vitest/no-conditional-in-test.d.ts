import type { RuleConfig } from '../rule-config';

/**
 * Disallow conditional tests.
 *
 * @see [no-conditional-in-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md)
 */
export type NoConditionalInTestRuleConfig = RuleConfig<[]>;

/**
 * Disallow conditional tests.
 *
 * @see [no-conditional-in-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md)
 */
export interface NoConditionalInTestRule {
  /**
   * Disallow conditional tests.
   *
   * @see [no-conditional-in-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md)
   */
  'vitest/no-conditional-in-test': NoConditionalInTestRuleConfig;
}
