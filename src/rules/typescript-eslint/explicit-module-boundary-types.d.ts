import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExplicitModuleBoundaryTypesOption {
  allowArgumentsExplicitlyTypedAsAny?: boolean;
  allowDirectConstAssertionInArrowFunctions?: boolean;
  allowedNames?: string[];
  allowHigherOrderFunctions?: boolean;
  allowTypedFunctionExpressions?: boolean;
  shouldTrackReferences?: boolean;
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
