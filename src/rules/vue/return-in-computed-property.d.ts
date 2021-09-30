import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ReturnInComputedPropertyOption = {
  /**
   * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
   */
  treatUndefinedAsUnspecified?: any;
};

/**
 * Options.
 */
export type ReturnInComputedPropertyOptions = [ReturnInComputedPropertyOption?];

/**
 * enforce that a return statement is present in computed property
 *
 * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
 */
export type ReturnInComputedPropertyRuleConfig = RuleConfig<ReturnInComputedPropertyOptions>;

/**
 * enforce that a return statement is present in computed property
 *
 * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
 */
export interface ReturnInComputedPropertyRule {
  /**
   * enforce that a return statement is present in computed property
   *
   * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
   */
  'vue/return-in-computed-property': ReturnInComputedPropertyRuleConfig;
}
