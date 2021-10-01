import type { RuleConfig } from '../rule-config';

/**
 * Enforce that a return statement is present in emits validator.
 *
 * @see [return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
 */
export type ReturnInEmitsValidatorRuleConfig = RuleConfig<[]>;

/**
 * Enforce that a return statement is present in emits validator.
 *
 * @see [return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
 */
export interface ReturnInEmitsValidatorRule {
  /**
   * Enforce that a return statement is present in emits validator.
   *
   * @see [return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
   */
  'vue/return-in-emits-validator': ReturnInEmitsValidatorRuleConfig;
}
