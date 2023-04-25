import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty callbacks for `waitFor` and `waitForElementToBeRemoved`.
 *
 * @see [no-wait-for-empty-callback](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-empty-callback.md)
 */
export type NoWaitForEmptyCallbackRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty callbacks for `waitFor` and `waitForElementToBeRemoved`.
 *
 * @see [no-wait-for-empty-callback](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-empty-callback.md)
 */
export interface NoWaitForEmptyCallbackRule {
  /**
   * Disallow empty callbacks for `waitFor` and `waitForElementToBeRemoved`.
   *
   * @see [no-wait-for-empty-callback](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-empty-callback.md)
   */
  'testing-library/no-wait-for-empty-callback': NoWaitForEmptyCallbackRuleConfig;
}
