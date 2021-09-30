import type { RuleConfig } from '../rule-config';

/**
 * enforce that a return statement is present in emits validator
 *
 * @see [return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
 */
export type ReturnInEmitsValidatorRuleConfig = RuleConfig<[]>;

/**
 * enforce that a return statement is present in emits validator
 *
 * @see [return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
 */
export interface ReturnInEmitsValidatorRule {
  /**
   * enforce that a return statement is present in emits validator
   *
   * @see [return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
   */
  'vue/return-in-emits-validator': ReturnInEmitsValidatorRuleConfig;
}
