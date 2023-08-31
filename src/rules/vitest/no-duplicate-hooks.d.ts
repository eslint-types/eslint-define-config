import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow duplicate hooks and teardown hooks.
 *
 * @see [no-duplicate-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md)
 */
export type NoDuplicateHooksRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate hooks and teardown hooks.
 *
 * @see [no-duplicate-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md)
 */
export interface NoDuplicateHooksRule {
  /**
   * Disallow duplicate hooks and teardown hooks.
   *
   * @see [no-duplicate-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md)
   */
  'vitest/no-duplicate-hooks': NoDuplicateHooksRuleConfig;
}
