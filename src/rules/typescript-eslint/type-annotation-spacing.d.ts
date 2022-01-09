import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TypeAnnotationSpacingOption {
  before?: boolean;
  after?: boolean;
  overrides?: {
    colon?: {
      before?: boolean;
      after?: boolean;
    };
    arrow?: {
      before?: boolean;
      after?: boolean;
    };
    variable?: {
      before?: boolean;
      after?: boolean;
    };
    parameter?: {
      before?: boolean;
      after?: boolean;
    };
    property?: {
      before?: boolean;
      after?: boolean;
    };
    returnType?: {
      before?: boolean;
      after?: boolean;
    };
  };
}

/**
 * Options.
 */
export type TypeAnnotationSpacingOptions = [TypeAnnotationSpacingOption?];

/**
 * Require consistent spacing around type annotations.
 *
 * @see [type-annotation-spacing](https://typescript-eslint.io/rules/type-annotation-spacing)
 */
export type TypeAnnotationSpacingRuleConfig =
  RuleConfig<TypeAnnotationSpacingOptions>;

/**
 * Require consistent spacing around type annotations.
 *
 * @see [type-annotation-spacing](https://typescript-eslint.io/rules/type-annotation-spacing)
 */
export interface TypeAnnotationSpacingRule {
  /**
   * Require consistent spacing around type annotations.
   *
   * @see [type-annotation-spacing](https://typescript-eslint.io/rules/type-annotation-spacing)
   */
  '@typescript-eslint/type-annotation-spacing': TypeAnnotationSpacingRuleConfig;
}
