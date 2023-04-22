import type { RuleConfig } from '../rule-config';

/**
 * Disallow setup and teardown hooks.
 *
 * @see [no-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md)
 */
export type NoHooksRuleConfig = RuleConfig;

/**
 * Disallow setup and teardown hooks.
 *
 * @see [no-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md)
 */
export interface NoHooksRule {
  /**
   * Disallow setup and teardown hooks.
   *
   * @see [no-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md)
   */
  'vitest/no-hooks': NoHooksRuleConfig;
}
