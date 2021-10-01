import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExplicitFunctionReturnTypeOption {
  /**
   * If `true`, only functions which are part of a declaration will be checked.
   *
   * @default false
   */
  allowExpressions?: boolean;
  /**
   * If `true`, type annotations are also allowed on the variable of a function expression rather than on the function directly.
   *
   * @default true
   */
  allowTypedFunctionExpressions?: boolean;
  /**
   * If `true`, functions immediately returning another function expression will not be checked.
   *
   * @default true
   */
  allowHigherOrderFunctions?: boolean;
  /**
   * If `true`, arrow functions immediately returning a `as const` value will not be checked.
   *
   * @default true
   */
  allowDirectConstAssertionInArrowFunctions?: boolean;
  /**
   * If `true`, concise arrow functions that start with the void keyword will not be checked.
   *
   * @default false
   */
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
}

/**
 * Options.
 */
export type ExplicitFunctionReturnTypeOptions = [ExplicitFunctionReturnTypeOption?];

/**
 * Require explicit return types on functions and class methods.
 *
 * @see [explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)
 */
export type ExplicitFunctionReturnTypeRuleConfig = RuleConfig<ExplicitFunctionReturnTypeOptions>;

/**
 * Require explicit return types on functions and class methods.
 *
 * @see [explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)
 */
export interface ExplicitFunctionReturnTypeRule {
  /**
   * Require explicit return types on functions and class methods.
   *
   * @see [explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)
   */
  '@typescript-eslint/explicit-function-return-type': ExplicitFunctionReturnTypeRuleConfig;
}
