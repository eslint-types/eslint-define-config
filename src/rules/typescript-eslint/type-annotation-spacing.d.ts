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
 * @see [type-annotation-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/type-annotation-spacing.md)
 */
export type TypeAnnotationSpacingRuleConfig = RuleConfig<TypeAnnotationSpacingOptions>;

/**
 * Require consistent spacing around type annotations.
 *
 * @see [type-annotation-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/type-annotation-spacing.md)
 */
export interface TypeAnnotationSpacingRule {
  /**
   * Require consistent spacing around type annotations.
   *
   * @see [type-annotation-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/type-annotation-spacing.md)
   */
  '@typescript-eslint/type-annotation-spacing': TypeAnnotationSpacingRuleConfig;
}
