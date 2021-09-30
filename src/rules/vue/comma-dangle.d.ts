import type { RuleConfig } from '../rule-config';

/**
 * require or disallow trailing commas
 *
 * @see [comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html)
 */
export type CommaDangleRuleConfig = RuleConfig<[]>;

/**
 * require or disallow trailing commas
 *
 * @see [comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html)
 */
export interface CommaDangleRule {
  /**
   * require or disallow trailing commas
   *
   * @see [comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html)
   */
  'vue/comma-dangle': CommaDangleRuleConfig;
}
