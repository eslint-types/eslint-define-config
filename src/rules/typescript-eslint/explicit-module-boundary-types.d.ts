import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExplicitModuleBoundaryTypesOption {
  /**
   * Whether to ignore arguments that are explicitly typed as `any`.
   */
  allowArgumentsExplicitlyTypedAsAny?: boolean;
  /**
   * Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.
   * You must still type the parameters of the function.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean;
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[];
  /**
   * Whether to ignore return type annotations on functions immediately returning another function expression.
   * You must still type the parameters of the function.
   */
  allowHigherOrderFunctions?: boolean;
  /**
   * Whether to ignore type annotations on the variable of a function expresion.
   */
  allowTypedFunctionExpressions?: boolean;
}

/**
 * Options.
 */
export type ExplicitModuleBoundaryTypesOptions = [
  ExplicitModuleBoundaryTypesOption?,
];

/**
 * Require explicit return and argument types on exported functions' and classes' public class methods.
 *
 * @see [explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types)
 */
export type ExplicitModuleBoundaryTypesRuleConfig =
  RuleConfig<ExplicitModuleBoundaryTypesOptions>;

/**
 * Require explicit return and argument types on exported functions' and classes' public class methods.
 *
 * @see [explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types)
 */
export interface ExplicitModuleBoundaryTypesRule {
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods.
   *
   * @see [explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types)
   */
  '@typescript-eslint/explicit-module-boundary-types': ExplicitModuleBoundaryTypesRuleConfig;
}
