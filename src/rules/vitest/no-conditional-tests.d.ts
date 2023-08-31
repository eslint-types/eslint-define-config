import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow conditional tests.
 *
 * @see [no-conditional-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md)
 */
export type NoConditionalTestsRuleConfig = RuleConfig<[]>;

/**
 * Disallow conditional tests.
 *
 * @see [no-conditional-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md)
 */
export interface NoConditionalTestsRule {
  /**
   * Disallow conditional tests.
   *
   * @see [no-conditional-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md)
   */
  'vitest/no-conditional-tests': NoConditionalTestsRuleConfig;
}
