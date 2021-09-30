import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CommaSpacingOption = {
  /**
   * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
   */
  before?: any;

  /**
   * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
   */
  after?: any;
};

/**
 * Options.
 */
export type CommaSpacingOptions = [CommaSpacingOption?];

/**
 * enforce consistent spacing before and after commas
 *
 * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
 */
export type CommaSpacingRuleConfig = RuleConfig<CommaSpacingOptions>;

/**
 * enforce consistent spacing before and after commas
 *
 * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
 */
export interface CommaSpacingRule {
  /**
   * enforce consistent spacing before and after commas
   *
   * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
   */
  'vue/comma-spacing': CommaSpacingRuleConfig;
}
