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
export type ExplicitModuleBoundaryTypesOptions = [ExplicitModuleBoundaryTypesOption?];

/**
 * Require explicit return and argument types on exported functions' and classes' public class methods.
 *
 * @see [explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)
 */
export type ExplicitModuleBoundaryTypesRuleConfig = RuleConfig<ExplicitModuleBoundaryTypesOptions>;

/**
 * Require explicit return and argument types on exported functions' and classes' public class methods.
 *
 * @see [explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)
 */
export interface ExplicitModuleBoundaryTypesRule {
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods.
   *
   * @see [explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)
   */
  '@typescript-eslint/explicit-module-boundary-types': ExplicitModuleBoundaryTypesRuleConfig;
}
