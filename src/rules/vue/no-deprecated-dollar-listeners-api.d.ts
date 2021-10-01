import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `$listeners` (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-dollar-listeners-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html)
 */
export type NoDeprecatedDollarListenersApiRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `$listeners` (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-dollar-listeners-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html)
 */
export interface NoDeprecatedDollarListenersApiRule {
  /**
   * Disallow using deprecated `$listeners` (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-dollar-listeners-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html)
   */
  'vue/no-deprecated-dollar-listeners-api': NoDeprecatedDollarListenersApiRuleConfig;
}
