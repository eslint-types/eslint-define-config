import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireHookOption {
  allowedFunctionCalls?: string[];
}

/**
 * Options.
 */
export type RequireHookOptions = [RequireHookOption?];

/**
 * Require setup and teardown to be within a hook.
 *
 * @see [require-hook](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md)
 */
export type RequireHookRuleConfig = RuleConfig<RequireHookOptions>;

/**
 * Require setup and teardown to be within a hook.
 *
 * @see [require-hook](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md)
 */
export interface RequireHookRule {
  /**
   * Require setup and teardown to be within a hook.
   *
   * @see [require-hook](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md)
   */
  'vitest/require-hook': RequireHookRuleConfig;
}
