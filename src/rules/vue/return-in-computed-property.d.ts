import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ReturnInComputedPropertyOption {
  treatUndefinedAsUnspecified?: boolean;
}

/**
 * Options.
 */
export type ReturnInComputedPropertyOptions = [ReturnInComputedPropertyOption?];

/**
 * Enforce that a return statement is present in computed property.
 *
 * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
 */
export type ReturnInComputedPropertyRuleConfig =
  RuleConfig<ReturnInComputedPropertyOptions>;

/**
 * Enforce that a return statement is present in computed property.
 *
 * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
 */
export interface ReturnInComputedPropertyRule {
  /**
   * Enforce that a return statement is present in computed property.
   *
   * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
   */
  'vue/return-in-computed-property': ReturnInComputedPropertyRuleConfig;
}
