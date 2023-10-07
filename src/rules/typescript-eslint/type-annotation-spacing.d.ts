import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TypeAnnotationSpacingOption {
  before?: boolean;
  after?: boolean;
  overrides?: {
    colon?: SpacingConfig;
    arrow?: SpacingConfig;
    variable?: SpacingConfig;
    parameter?: SpacingConfig;
    property?: SpacingConfig;
    returnType?: SpacingConfig;
  };
}
export interface SpacingConfig {
  before?: boolean;
  after?: boolean;
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
