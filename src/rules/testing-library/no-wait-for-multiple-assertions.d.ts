import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of multiple `expect` calls inside `waitFor`.
 *
 * @see [no-wait-for-multiple-assertions](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-multiple-assertions.md)
 */
export type NoWaitForMultipleAssertionsRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of multiple `expect` calls inside `waitFor`.
 *
 * @see [no-wait-for-multiple-assertions](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-multiple-assertions.md)
 */
export interface NoWaitForMultipleAssertionsRule {
  /**
   * Disallow the use of multiple `expect` calls inside `waitFor`.
   *
   * @see [no-wait-for-multiple-assertions](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-multiple-assertions.md)
   */
  'testing-library/no-wait-for-multiple-assertions': NoWaitForMultipleAssertionsRuleConfig;
}
