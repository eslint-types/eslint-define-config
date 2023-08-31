import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Enforce promises from `fireEvent` methods to be handled.
 *
 * @see [await-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-fire-event.md)
 */
export type AwaitFireEventRuleConfig = RuleConfig<[]>;

/**
 * Enforce promises from `fireEvent` methods to be handled.
 *
 * @see [await-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-fire-event.md)
 */
export interface AwaitFireEventRule {
  /**
   * Enforce promises from `fireEvent` methods to be handled.
   *
   * @see [await-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-fire-event.md)
   */
  'testing-library/await-fire-event': AwaitFireEventRuleConfig;
}
