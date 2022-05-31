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
 * @see [comma-spacing](https://typescript-eslint.io/rules/comma-spacing)
 */
export type CommaSpacingRuleConfig = RuleConfig<CommaSpacingOptions>;

/**
 * Enforce consistent spacing before and after commas.
 *
 * @see [comma-spacing](https://typescript-eslint.io/rules/comma-spacing)
 */
export interface CommaSpacingRule {
  /**
   * Enforce consistent spacing before and after commas.
   *
   * @see [comma-spacing](https://typescript-eslint.io/rules/comma-spacing)
   */
  '@typescript-eslint/comma-spacing': CommaSpacingRuleConfig;
}
