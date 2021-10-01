import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-destroyed-lifecycle](https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html)
 */
export type NoDeprecatedDestroyedLifecycleRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-destroyed-lifecycle](https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html)
 */
export interface NoDeprecatedDestroyedLifecycleRule {
  /**
   * Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-destroyed-lifecycle](https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html)
   */
  'vue/no-deprecated-destroyed-lifecycle': NoDeprecatedDestroyedLifecycleRuleConfig;
}
