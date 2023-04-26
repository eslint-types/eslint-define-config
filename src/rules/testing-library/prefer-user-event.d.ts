import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferUserEventOption {
  allowedMethods?: any[];
  [k: string]: any;
}

/**
 * Options.
 */
export type PreferUserEventOptions = [PreferUserEventOption?];

/**
 * Suggest using `userEvent` over `fireEvent` for simulating user interactions.
 *
 * @see [prefer-user-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md)
 */
export type PreferUserEventRuleConfig = RuleConfig<PreferUserEventOptions>;

/**
 * Suggest using `userEvent` over `fireEvent` for simulating user interactions.
 *
 * @see [prefer-user-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md)
 */
export interface PreferUserEventRule {
  /**
   * Suggest using `userEvent` over `fireEvent` for simulating user interactions.
   *
   * @see [prefer-user-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md)
   */
  'testing-library/prefer-user-event': PreferUserEventRuleConfig;
}
