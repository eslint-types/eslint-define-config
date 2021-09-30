import type { RuleConfig } from '../rule-config';

/**
 * Require or disallow spacing between function identifiers and their invocations
 *
 * @see [func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)
 */
export type FuncCallSpacingRuleConfig = RuleConfig<[]>;

/**
 * Require or disallow spacing between function identifiers and their invocations
 *
 * @see [func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)
 */
export interface FuncCallSpacingRule {
  /**
   * Require or disallow spacing between function identifiers and their invocations
   *
   * @see [func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)
   */
  'vue/func-call-spacing': FuncCallSpacingRuleConfig;
}
