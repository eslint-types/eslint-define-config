import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExplicitFunctionReturnTypeOption {
  allowExpressions?: boolean;
  allowTypedFunctionExpressions?: boolean;
  allowHigherOrderFunctions?: boolean;
  allowDirectConstAssertionInArrowFunctions?: boolean;
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
}

/**
 * Options.
 */
export type ExplicitFunctionReturnTypeOptions = [ExplicitFunctionReturnTypeOption?];

/**
 * Require explicit return types on functions and class methods.
 *
 * @see [explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)
 */
export type ExplicitFunctionReturnTypeRuleConfig = RuleConfig<ExplicitFunctionReturnTypeOptions>;

/**
 * Require explicit return types on functions and class methods.
 *
 * @see [explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)
 */
export interface ExplicitFunctionReturnTypeRule {
  /**
   * Require explicit return types on functions and class methods.
   *
   * @see [explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)
   */
  '@typescript-eslint/explicit-function-return-type': ExplicitFunctionReturnTypeRuleConfig;
}
