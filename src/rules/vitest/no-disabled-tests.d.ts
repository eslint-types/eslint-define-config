import type { RuleConfig } from '../rule-config';

/**
 * Disallow disabled tests.
 *
 * @see [no-disabled-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md)
 */
export type NoDisabledTestsRuleConfig = RuleConfig<[]>;

/**
 * Disallow disabled tests.
 *
 * @see [no-disabled-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md)
 */
export interface NoDisabledTestsRule {
  /**
   * Disallow disabled tests.
   *
   * @see [no-disabled-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md)
   */
  'vitest/no-disabled-tests': NoDisabledTestsRuleConfig;
}
