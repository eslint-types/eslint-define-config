import type { RuleConfig } from '../rule-config';

/**
 * Enforce promises from async queries to be handled.
 *
 * @see [await-async-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-queries.md)
 */
export type AwaitAsyncQueriesRuleConfig = RuleConfig<[]>;

/**
 * Enforce promises from async queries to be handled.
 *
 * @see [await-async-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-queries.md)
 */
export interface AwaitAsyncQueriesRule {
  /**
   * Enforce promises from async queries to be handled.
   *
   * @see [await-async-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-queries.md)
   */
  'testing-library/await-async-queries': AwaitAsyncQueriesRuleConfig;
}
