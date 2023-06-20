import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CommaSpacingOption {
  before?: boolean;
  after?: boolean;
}

/**
 * Options.
 */
export type CommaSpacingOptions = [CommaSpacingOption?];

/**
 * Enforce consistent spacing before and after commas.
 *
 * @see [comma-spacing](https://eslint.org/docs/latest/rules/comma-spacing)
 */
export type CommaSpacingRuleConfig = RuleConfig<CommaSpacingOptions>;

/**
 * Enforce consistent spacing before and after commas.
 *
 * @see [comma-spacing](https://eslint.org/docs/latest/rules/comma-spacing)
 */
export interface CommaSpacingRule {
  /**
   * Enforce consistent spacing before and after commas.
   *
   * @see [comma-spacing](https://eslint.org/docs/latest/rules/comma-spacing)
   */
  'comma-spacing': CommaSpacingRuleConfig;
}
