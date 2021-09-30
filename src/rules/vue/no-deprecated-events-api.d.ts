import type { RuleConfig } from '../rule-config';

/**
 * disallow using deprecated events api (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
 */
export type NoDeprecatedEventsApiRuleConfig = RuleConfig<[]>;

/**
 * disallow using deprecated events api (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
 */
export interface NoDeprecatedEventsApiRule {
  /**
   * disallow using deprecated events api (in Vue.js 3.0.0+)
   *
   * @see [no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
   */
  'vue/no-deprecated-events-api': NoDeprecatedEventsApiRuleConfig;
}
