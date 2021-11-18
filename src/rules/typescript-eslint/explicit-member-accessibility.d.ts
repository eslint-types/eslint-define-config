import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExplicitMemberAccessibilityOption {
  accessibility?: 'explicit' | 'no-public' | 'off';
  overrides?: {
    accessors?: 'explicit' | 'no-public' | 'off';
    constructors?: 'explicit' | 'no-public' | 'off';
    methods?: 'explicit' | 'no-public' | 'off';
    properties?: 'explicit' | 'no-public' | 'off';
    parameterProperties?: 'explicit' | 'no-public' | 'off';
  };
  ignoredMethodNames?: string[];
}

/**
 * Options.
 */
export type ExplicitMemberAccessibilityOptions = [ExplicitMemberAccessibilityOption?];

/**
 * Require explicit accessibility modifiers on class properties and methods.
 *
 * @see [explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)
 */
export type ExplicitMemberAccessibilityRuleConfig = RuleConfig<ExplicitMemberAccessibilityOptions>;

/**
 * Require explicit accessibility modifiers on class properties and methods.
 *
 * @see [explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)
 */
export interface ExplicitMemberAccessibilityRule {
  /**
   * Require explicit accessibility modifiers on class properties and methods.
   *
   * @see [explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)
   */
  '@typescript-eslint/explicit-member-accessibility': ExplicitMemberAccessibilityRuleConfig;
}
