import type { RuleConfig } from '../rule-config';

/**
 * disallow `this` usage in a `beforeRouteEnter` method
 *
 * @see [no-this-in-before-route-enter](https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html)
 */
export type NoThisInBeforeRouteEnterRuleConfig = RuleConfig<[]>;

/**
 * disallow `this` usage in a `beforeRouteEnter` method
 *
 * @see [no-this-in-before-route-enter](https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html)
 */
export interface NoThisInBeforeRouteEnterRule {
  /**
   * disallow `this` usage in a `beforeRouteEnter` method
   *
   * @see [no-this-in-before-route-enter](https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html)
   */
  'vue/no-this-in-before-route-enter': NoThisInBeforeRouteEnterRuleConfig;
}
