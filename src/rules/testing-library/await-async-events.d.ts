import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AwaitAsyncEventsOption {
  eventModule?: ('fireEvent' | 'userEvent') | ('fireEvent' | 'userEvent')[];
}

/**
 * Options.
 */
export type AwaitAsyncEventsOptions = [AwaitAsyncEventsOption?];

/**
 * Enforce promises from async event methods are handled.
 *
 * @see [await-async-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-events.md)
 */
export type AwaitAsyncEventsRuleConfig = RuleConfig<AwaitAsyncEventsOptions>;

/**
 * Enforce promises from async event methods are handled.
 *
 * @see [await-async-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-events.md)
 */
export interface AwaitAsyncEventsRule {
  /**
   * Enforce promises from async event methods are handled.
   *
   * @see [await-async-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-events.md)
   */
  'testing-library/await-async-events': AwaitAsyncEventsRuleConfig;
}
