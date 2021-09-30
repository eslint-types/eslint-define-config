import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ArrowSpacingOption = {
  /**
   * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
   */
  before?: any;

  /**
   * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
   */
  after?: any;
};

/**
 * Options.
 */
export type ArrowSpacingOptions = [ArrowSpacingOption?];

/**
 * enforce consistent spacing before and after the arrow in arrow functions
 *
 * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
 */
export type ArrowSpacingRuleConfig = RuleConfig<ArrowSpacingOptions>;

/**
 * enforce consistent spacing before and after the arrow in arrow functions
 *
 * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
 */
export interface ArrowSpacingRule {
  /**
   * enforce consistent spacing before and after the arrow in arrow functions
   *
   * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
   */
  'vue/arrow-spacing': ArrowSpacingRuleConfig;
}
