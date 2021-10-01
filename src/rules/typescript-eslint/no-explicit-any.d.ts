import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExplicitAnyOption {
  /**
   * If `true`, auto-fixing will be made available in which the "any" type is converted to an "unknown" type.
   *
   * @default false
   */
  fixToUnknown?: boolean;
  /**
   * Specify if arrays from the rest operator are considered okay.
   *
   * @default false
   */
  ignoreRestArgs?: boolean;
}

/**
 * Options.
 */
export type NoExplicitAnyOptions = [NoExplicitAnyOption?];

/**
 * Disallow usage of the `any` type.
 *
 * @see [no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-explicit-any.md)
 */
export type NoExplicitAnyRuleConfig = RuleConfig<NoExplicitAnyOptions>;

/**
 * Disallow usage of the `any` type.
 *
 * @see [no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-explicit-any.md)
 */
export interface NoExplicitAnyRule {
  /**
   * Disallow usage of the `any` type.
   *
   * @see [no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-explicit-any.md)
   */
  '@typescript-eslint/no-explicit-any': NoExplicitAnyRuleConfig;
}
