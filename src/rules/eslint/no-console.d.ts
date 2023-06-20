import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoConsoleOption {
  /**
   * @minItems 1
   */
  allow?: [string, ...string[]];
}

/**
 * Options.
 */
export type NoConsoleOptions = [NoConsoleOption?];

/**
 * Disallow the use of `console`.
 *
 * @see [no-console](https://eslint.org/docs/latest/rules/no-console)
 */
export type NoConsoleRuleConfig = RuleConfig<NoConsoleOptions>;

/**
 * Disallow the use of `console`.
 *
 * @see [no-console](https://eslint.org/docs/latest/rules/no-console)
 */
export interface NoConsoleRule {
  /**
   * Disallow the use of `console`.
   *
   * @see [no-console](https://eslint.org/docs/latest/rules/no-console)
   */
  'no-console': NoConsoleRuleConfig;
}
