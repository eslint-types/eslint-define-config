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
  allowedNames?: string[];
}

/**
 * Options.
 */
export type ExplicitFunctionReturnTypeOptions = [
  ExplicitFunctionReturnTypeOption?,
];

/**
 * Require explicit return types on functions and class methods.
 *
 * @see [explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type)
 */
export type ExplicitFunctionReturnTypeRuleConfig =
  RuleConfig<ExplicitFunctionReturnTypeOptions>;

/**
 * Require explicit return types on functions and class methods.
 *
 * @see [explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type)
 */
export interface ExplicitFunctionReturnTypeRule {
  /**
   * Require explicit return types on functions and class methods.
   *
   * @see [explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type)
   */
  '@typescript-eslint/explicit-function-return-type': ExplicitFunctionReturnTypeRuleConfig;
}
