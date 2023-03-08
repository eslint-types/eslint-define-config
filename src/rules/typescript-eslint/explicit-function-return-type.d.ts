import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExplicitFunctionReturnTypeOption {
  /**
   * Whether to allow arrow functions that start with the `void` keyword.
   */
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
  /**
   * Whether to ignore function expressions (functions which are not part of a declaration).
   */
  allowExpressions?: boolean;
  /**
   * Whether to ignore functions immediately returning another function expression.
   */
  allowHigherOrderFunctions?: boolean;
  /**
   * Whether to ignore type annotations on the variable of function expressions.
   */
  allowTypedFunctionExpressions?: boolean;
  /**
   * Whether to ignore arrow functions immediately returning a `as const` value.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean;
  /**
   * Whether to ignore functions that don't have generic type parameters.
   */
  allowFunctionsWithoutTypeParameters?: boolean;
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[];
  /**
   * Whether to ignore immediately invoked function expressions (IIFEs).
   */
  allowIIFEs?: boolean;
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
