import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExplicitAnyOption {
  fixToUnknown?: boolean;
  ignoreRestArgs?: boolean;
}

/**
 * Options.
 */
export type NoExplicitAnyOptions = [NoExplicitAnyOption?];

/**
 * Disallow usage of the `any` type.
 *
 * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
 */
export type NoExplicitAnyRuleConfig = RuleConfig<NoExplicitAnyOptions>;

/**
 * Disallow usage of the `any` type.
 *
 * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
 */
export interface NoExplicitAnyRule {
  /**
   * Disallow usage of the `any` type.
   *
   * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
   */
  '@typescript-eslint/no-explicit-any': NoExplicitAnyRuleConfig;
}
