import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface VOnHandlerStyleConfig {
  ignoreIncludesComment?: boolean;
}

/**
 * Option.
 */
export type VOnHandlerStyleOption =
  | ('inline' | 'inline-function')
  | ['method', 'inline' | 'inline-function'];

/**
 * Options.
 */
export type VOnHandlerStyleOptions = [
  VOnHandlerStyleOption?,
  VOnHandlerStyleConfig?,
];

/**
 * Enforce writing style for handlers in `v-on` directives.
 *
 * @see [v-on-handler-style](https://eslint.vuejs.org/rules/v-on-handler-style.html)
 */
export type VOnHandlerStyleRuleConfig = RuleConfig<VOnHandlerStyleOptions>;

/**
 * Enforce writing style for handlers in `v-on` directives.
 *
 * @see [v-on-handler-style](https://eslint.vuejs.org/rules/v-on-handler-style.html)
 */
export interface VOnHandlerStyleRule {
  /**
   * Enforce writing style for handlers in `v-on` directives.
   *
   * @see [v-on-handler-style](https://eslint.vuejs.org/rules/v-on-handler-style.html)
   */
  'vue/v-on-handler-style': VOnHandlerStyleRuleConfig;
}
