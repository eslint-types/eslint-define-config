import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface VOnFunctionCallConfig {
  ignoreIncludesComment?: boolean;
}

/**
 * Option.
 */
export type VOnFunctionCallOption = 'always' | 'never';

/**
 * Options.
 */
export type VOnFunctionCallOptions = [
  VOnFunctionCallOption?,
  VOnFunctionCallConfig?,
];

/**
 * Enforce or forbid parentheses after method calls without arguments in `v-on` directives.
 *
 * @deprecated
 *
 * @see [v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html)
 */
export type VOnFunctionCallRuleConfig = RuleConfig<VOnFunctionCallOptions>;

/**
 * Enforce or forbid parentheses after method calls without arguments in `v-on` directives.
 *
 * @deprecated
 *
 * @see [v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html)
 */
export interface VOnFunctionCallRule {
  /**
   * Enforce or forbid parentheses after method calls without arguments in `v-on` directives.
   *
   * @deprecated
   *
   * @see [v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html)
   */
  'vue/v-on-function-call': VOnFunctionCallRuleConfig;
}
