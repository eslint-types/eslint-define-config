import type { RuleConfig } from '../rule-config';

/**
 * Disallow commented out tests.
 *
 * @see [no-commented-out-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md)
 */
export type NoCommentedOutTestsRuleConfig = RuleConfig<[]>;

/**
 * Disallow commented out tests.
 *
 * @see [no-commented-out-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md)
 */
export interface NoCommentedOutTestsRule {
  /**
   * Disallow commented out tests.
   *
   * @see [no-commented-out-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md)
   */
  'vitest/no-commented-out-tests': NoCommentedOutTestsRuleConfig;
}
