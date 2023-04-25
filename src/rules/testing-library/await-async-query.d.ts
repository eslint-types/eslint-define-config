import type { RuleConfig } from '../rule-config';

/**
 * Enforce promises from async queries to be handled.
 *
 * @see [await-async-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-query.md)
 */
export type AwaitAsyncQueryRuleConfig = RuleConfig<[]>;

/**
 * Enforce promises from async queries to be handled.
 *
 * @see [await-async-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-query.md)
 */
export interface AwaitAsyncQueryRule {
  /**
   * Enforce promises from async queries to be handled.
   *
   * @see [await-async-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-query.md)
   */
  'testing-library/await-async-query': AwaitAsyncQueryRuleConfig;
}
