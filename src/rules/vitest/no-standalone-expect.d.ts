import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoStandaloneExpectOption {
  additionalTestBlockFunctions?: string[];
}

/**
 * Options.
 */
export type NoStandaloneExpectOptions = [NoStandaloneExpectOption?];

/**
 * Disallow using `expect` outside of `it` or `test` blocks.
 *
 * @see [no-standalone-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md)
 */
export type NoStandaloneExpectRuleConfig =
  RuleConfig<NoStandaloneExpectOptions>;

/**
 * Disallow using `expect` outside of `it` or `test` blocks.
 *
 * @see [no-standalone-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md)
 */
export interface NoStandaloneExpectRule {
  /**
   * Disallow using `expect` outside of `it` or `test` blocks.
   *
   * @see [no-standalone-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md)
   */
  'vitest/no-standalone-expect': NoStandaloneExpectRuleConfig;
}
