import type { RuleConfig } from '../rule-config';

/**
 * Accessibility Level.
 */
export type AccessibilityLevel =
  | 'explicit' // require an accessor (including public)
  | 'no-public' // don't require public
  | 'off'; // don't check

/**
 * Option.
 */
export interface ExplicitMemberAccessibilityOption {
  /**
   * This rule in its default state requires no configuration and will enforce that every class member has an accessibility modifier.
   *
   * @default 'explicit'
   *
   * @see [accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md#accessibility)
   */
  accessibility?: AccessibilityLevel;
  /**
   * @see [overrides](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md#overrides)
   */
  overrides?: {
    accessors?: AccessibilityLevel;
    constructors?: AccessibilityLevel;
    methods?: AccessibilityLevel;
    properties?: AccessibilityLevel;
    parameterProperties?: AccessibilityLevel;
  };
  /**
   * @see [ignoredMethodNames](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md#except-specific-methods)
   */
  ignoredMethodNames?: string[];
}

/**
 * Options.
 */
export type ExplicitMemberAccessibilityOptions = [ExplicitMemberAccessibilityOption?];

/**
 * Require explicit accessibility modifiers on class properties and methods.
 *
 * @see [explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)
 */
export type ExplicitMemberAccessibilityRuleConfig = RuleConfig<ExplicitMemberAccessibilityOptions>;

/**
 * Require explicit accessibility modifiers on class properties and methods.
 *
 * @see [explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)
 */
export interface ExplicitMemberAccessibilityRule {
  /**
   * Require explicit accessibility modifiers on class properties and methods.
   *
   * @see [explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)
   */
  '@typescript-eslint/explicit-member-accessibility': ExplicitMemberAccessibilityRuleConfig;
}
