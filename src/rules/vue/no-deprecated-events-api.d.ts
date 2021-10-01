import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated events api (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
 */
export type NoDeprecatedEventsApiRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated events api (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
 */
export interface NoDeprecatedEventsApiRule {
  /**
   * Disallow using deprecated events api (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
   */
  'vue/no-deprecated-events-api': NoDeprecatedEventsApiRuleConfig;
}
