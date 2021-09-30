import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CommaDangleOption = any[];

/**
 * Options.
 */
export type CommaDangleOptions = [CommaDangleOption?];

/**
 * Require or disallow trailing commas
 *
 * @see [comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html)
 */
export type CommaDangleRuleConfig = RuleConfig<CommaDangleOptions>;

/**
 * Require or disallow trailing commas
 *
 * @see [comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html)
 */
export interface CommaDangleRule {
  /**
   * Require or disallow trailing commas
   *
   * @see [comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html)
   */
  'vue/comma-dangle': CommaDangleRuleConfig;
}
