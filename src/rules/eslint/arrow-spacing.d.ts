import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ArrowSpacingOption {
  before?: boolean;
  after?: boolean;
}

/**
 * Options.
 */
export type ArrowSpacingOptions = [ArrowSpacingOption?];

/**
 * Enforce consistent spacing before and after the arrow in arrow functions.
 *
 * @see [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing)
 */
export type ArrowSpacingRuleConfig = RuleConfig<ArrowSpacingOptions>;

/**
 * Enforce consistent spacing before and after the arrow in arrow functions.
 *
 * @see [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing)
 */
export interface ArrowSpacingRule {
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions.
   *
   * @see [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing)
   */
  'arrow-spacing': ArrowSpacingRuleConfig;
}
