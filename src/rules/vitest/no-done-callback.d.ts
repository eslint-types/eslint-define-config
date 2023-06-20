import type { RuleConfig } from '../rule-config';

/**
 * Disallow using a callback in asynchronous tests and hooks.
 *
 * @see [no-done-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md)
 */
export type NoDoneCallbackRuleConfig = RuleConfig<[]>;

/**
 * Disallow using a callback in asynchronous tests and hooks.
 *
 * @see [no-done-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md)
 */
export interface NoDoneCallbackRule {
  /**
   * Disallow using a callback in asynchronous tests and hooks.
   *
   * @see [no-done-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md)
   */
  'vitest/no-done-callback': NoDoneCallbackRuleConfig;
}
