import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExplicitAnyOption {
  /**
   * Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.
   */
  fixToUnknown?: boolean;
  /**
   * Whether to ignore rest parameter arrays.
   */
  ignoreRestArgs?: boolean;
}

/**
 * Options.
 */
export type NoExplicitAnyOptions = [NoExplicitAnyOption?];

/**
 * Disallow the `any` type.
 *
 * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
 */
export type NoExplicitAnyRuleConfig = RuleConfig<NoExplicitAnyOptions>;

/**
 * Disallow the `any` type.
 *
 * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
 */
export interface NoExplicitAnyRule {
  /**
   * Disallow the `any` type.
   *
   * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
   */
  '@typescript-eslint/no-explicit-any': NoExplicitAnyRuleConfig;
}
