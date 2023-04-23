import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoHooksOption {
  allow?: any[];
}

/**
 * Options.
 */
export type NoHooksOptions = [NoHooksOption?];

/**
 * Disallow setup and teardown hooks.
 *
 * @see [no-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md)
 */
export type NoHooksRuleConfig = RuleConfig<NoHooksOptions>;

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
