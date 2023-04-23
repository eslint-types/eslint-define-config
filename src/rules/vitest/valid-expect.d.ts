import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidExpectOption {
  alwaysAwait?: boolean;
  asyncMatchers?: string[];
  minArgs?: number;
  maxArgs?: number;
}

/**
 * Options.
 */
export type ValidExpectOptions = [ValidExpectOption?];

/**
 * Enforce valid `expect()` usage.
 *
 * @see [valid-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md)
 */
export type ValidExpectRuleConfig = RuleConfig<ValidExpectOptions>;

/**
 * Enforce valid `expect()` usage.
 *
 * @see [valid-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md)
 */
export interface ValidExpectRule {
  /**
   * Enforce valid `expect()` usage.
   *
   * @see [valid-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md)
   */
  'vitest/valid-expect': ValidExpectRuleConfig;
}
