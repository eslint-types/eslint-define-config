import type { RuleConfig } from '../rule-config';

/**
 * disallow using deprecated filters syntax (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-filter](https://eslint.vuejs.org/rules/no-deprecated-filter.html)
 */
export type NoDeprecatedFilterRuleConfig = RuleConfig<[]>;

/**
 * disallow using deprecated filters syntax (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-filter](https://eslint.vuejs.org/rules/no-deprecated-filter.html)
 */
export interface NoDeprecatedFilterRule {
  /**
   * disallow using deprecated filters syntax (in Vue.js 3.0.0+)
   *
   * @see [no-deprecated-filter](https://eslint.vuejs.org/rules/no-deprecated-filter.html)
   */
  'vue/no-deprecated-filter': NoDeprecatedFilterRuleConfig;
}
