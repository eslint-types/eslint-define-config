import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RestSpreadSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type RestSpreadSpacingOptions = [RestSpreadSpacingOption?];

/**
 * Enforce spacing between rest and spread operators and their expressions.
 *
 * @see [rest-spread-spacing](https://eslint.org/docs/latest/rules/rest-spread-spacing)
 */
export type RestSpreadSpacingRuleConfig = RuleConfig<RestSpreadSpacingOptions>;

/**
 * Enforce spacing between rest and spread operators and their expressions.
 *
 * @see [rest-spread-spacing](https://eslint.org/docs/latest/rules/rest-spread-spacing)
 */
export interface RestSpreadSpacingRule {
  /**
   * Enforce spacing between rest and spread operators and their expressions.
   *
   * @see [rest-spread-spacing](https://eslint.org/docs/latest/rules/rest-spread-spacing)
   */
  'rest-spread-spacing': RestSpreadSpacingRuleConfig;
}
