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
 * Enforces consistent spacing before and after commas.
 *
 * @see [comma-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/comma-spacing.md)
 */
export type CommaSpacingRuleConfig = RuleConfig<CommaSpacingOptions>;

/**
 * Enforces consistent spacing before and after commas.
 *
 * @see [comma-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/comma-spacing.md)
 */
export interface CommaSpacingRule {
  /**
   * Enforces consistent spacing before and after commas.
   *
   * @see [comma-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/comma-spacing.md)
   */
  '@typescript-eslint/comma-spacing': CommaSpacingRuleConfig;
}
