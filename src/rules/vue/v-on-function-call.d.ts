import type { RuleConfig } from '../rule-config';

/**
 * enforce or forbid parentheses after method calls without arguments in `v-on` directives
 *
 * @see [v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html)
 */
export type VOnFunctionCallRuleConfig = RuleConfig<[]>;

/**
 * enforce or forbid parentheses after method calls without arguments in `v-on` directives
 *
 * @see [v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html)
 */
export interface VOnFunctionCallRule {
  /**
   * enforce or forbid parentheses after method calls without arguments in `v-on` directives
   *
   * @see [v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html)
   */
  'vue/v-on-function-call': VOnFunctionCallRuleConfig;
}
