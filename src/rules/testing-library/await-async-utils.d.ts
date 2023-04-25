import type { RuleConfig } from '../rule-config';

/**
 * Enforce promises from async utils to be awaited properly.
 *
 * @see [await-async-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-utils.md)
 */
export type AwaitAsyncUtilsRuleConfig = RuleConfig<[]>;

/**
 * Enforce promises from async utils to be awaited properly.
 *
 * @see [await-async-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-utils.md)
 */
export interface AwaitAsyncUtilsRule {
  /**
   * Enforce promises from async utils to be awaited properly.
   *
   * @see [await-async-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-utils.md)
   */
  'testing-library/await-async-utils': AwaitAsyncUtilsRuleConfig;
}
