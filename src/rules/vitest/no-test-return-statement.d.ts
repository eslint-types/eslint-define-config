import type { RuleConfig } from '../rule-config';

/**
 * Disallow return statements in tests.
 *
 * @see [no-test-return-statement](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md)
 */
export type NoTestReturnStatementRuleConfig = RuleConfig<[]>;

/**
 * Disallow return statements in tests.
 *
 * @see [no-test-return-statement](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md)
 */
export interface NoTestReturnStatementRule {
  /**
   * Disallow return statements in tests.
   *
   * @see [no-test-return-statement](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md)
   */
  'vitest/no-test-return-statement': NoTestReturnStatementRuleConfig;
}
