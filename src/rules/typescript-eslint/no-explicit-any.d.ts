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
 * @see [no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-explicit-any.md)
 */
export type NoExplicitAnyRuleConfig = RuleConfig<NoExplicitAnyOptions>;

/**
 * Disallow usage of the `any` type.
 *
 * @see [no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-explicit-any.md)
 */
export interface NoExplicitAnyRule {
  /**
   * Disallow usage of the `any` type.
   *
   * @see [no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-explicit-any.md)
   */
  '@typescript-eslint/no-explicit-any': NoExplicitAnyRuleConfig;
}
