import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type AccessibilityLevel = 'explicit' | 'no-public' | 'off';

export interface ExplicitMemberAccessibilityOption {
  accessibility?: AccessibilityLevel;
  overrides?: {
    accessors?: AccessibilityLevel;
    constructors?: AccessibilityLevel;
    methods?: AccessibilityLevel;
    properties?: AccessibilityLevel;
    parameterProperties?: AccessibilityLevel;
  };
  ignoredMethodNames?: string[];
}

/**
 * Options.
 */
export type ExplicitMemberAccessibilityOptions = [
  ExplicitMemberAccessibilityOption?,
];

/**
 * Require explicit accessibility modifiers on class properties and methods.
 *
 * @see [explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)
 */
export type ExplicitMemberAccessibilityRuleConfig =
  RuleConfig<ExplicitMemberAccessibilityOptions>;

/**
 * Require explicit accessibility modifiers on class properties and methods.
 *
 * @see [explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)
 */
export interface ExplicitMemberAccessibilityRule {
  /**
   * Require explicit accessibility modifiers on class properties and methods.
   *
   * @see [explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)
   */
  '@typescript-eslint/explicit-member-accessibility': ExplicitMemberAccessibilityRuleConfig;
}
