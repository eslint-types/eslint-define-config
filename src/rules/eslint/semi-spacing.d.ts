import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SemiSpacingOption {
  before?: boolean;
  after?: boolean;
}

/**
 * Options.
 */
export type SemiSpacingOptions = [SemiSpacingOption?];

/**
 * Enforce consistent spacing before and after semicolons.
 *
 * @see [semi-spacing](https://eslint.org/docs/latest/rules/semi-spacing)
 */
export type SemiSpacingRuleConfig = RuleConfig<SemiSpacingOptions>;

/**
 * Enforce consistent spacing before and after semicolons.
 *
 * @see [semi-spacing](https://eslint.org/docs/latest/rules/semi-spacing)
 */
export interface SemiSpacingRule {
  /**
   * Enforce consistent spacing before and after semicolons.
   *
   * @see [semi-spacing](https://eslint.org/docs/latest/rules/semi-spacing)
   */
  'semi-spacing': SemiSpacingRuleConfig;
}
