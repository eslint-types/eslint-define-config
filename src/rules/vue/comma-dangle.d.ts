import type { RuleConfig } from '../rule-config';

/**
 * Require or disallow trailing commas
 *
 * @see [comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html)
 */
export type CommaDangleRuleConfig = RuleConfig<[]>;

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
