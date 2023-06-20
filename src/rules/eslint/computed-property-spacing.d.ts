import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ComputedPropertySpacingConfig {
  enforceForClassMembers?: boolean;
}

/**
 * Option.
 */
export type ComputedPropertySpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type ComputedPropertySpacingOptions = [
  ComputedPropertySpacingOption?,
  ComputedPropertySpacingConfig?,
];

/**
 * Enforce consistent spacing inside computed property brackets.
 *
 * @see [computed-property-spacing](https://eslint.org/docs/latest/rules/computed-property-spacing)
 */
export type ComputedPropertySpacingRuleConfig =
  RuleConfig<ComputedPropertySpacingOptions>;

/**
 * Enforce consistent spacing inside computed property brackets.
 *
 * @see [computed-property-spacing](https://eslint.org/docs/latest/rules/computed-property-spacing)
 */
export interface ComputedPropertySpacingRule {
  /**
   * Enforce consistent spacing inside computed property brackets.
   *
   * @see [computed-property-spacing](https://eslint.org/docs/latest/rules/computed-property-spacing)
   */
  'computed-property-spacing': ComputedPropertySpacingRuleConfig;
}
