import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of promises passed to a `fireEvent` method.
 *
 * @see [no-promise-in-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-promise-in-fire-event.md)
 */
export type NoPromiseInFireEventRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of promises passed to a `fireEvent` method.
 *
 * @see [no-promise-in-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-promise-in-fire-event.md)
 */
export interface NoPromiseInFireEventRule {
  /**
   * Disallow the use of promises passed to a `fireEvent` method.
   *
   * @see [no-promise-in-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-promise-in-fire-event.md)
   */
  'testing-library/no-promise-in-fire-event': NoPromiseInFireEventRuleConfig;
}
