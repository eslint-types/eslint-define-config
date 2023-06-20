import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SwitchColonSpacingOption {
  before?: boolean;
  after?: boolean;
}

/**
 * Options.
 */
export type SwitchColonSpacingOptions = [SwitchColonSpacingOption?];

/**
 * Enforce spacing around colons of switch statements.
 *
 * @see [switch-colon-spacing](https://eslint.org/docs/latest/rules/switch-colon-spacing)
 */
export type SwitchColonSpacingRuleConfig =
  RuleConfig<SwitchColonSpacingOptions>;

/**
 * Enforce spacing around colons of switch statements.
 *
 * @see [switch-colon-spacing](https://eslint.org/docs/latest/rules/switch-colon-spacing)
 */
export interface SwitchColonSpacingRule {
  /**
   * Enforce spacing around colons of switch statements.
   *
   * @see [switch-colon-spacing](https://eslint.org/docs/latest/rules/switch-colon-spacing)
   */
  'switch-colon-spacing': SwitchColonSpacingRuleConfig;
}
