import type { RuleConfig } from '../rule-config';

/**
 * Disallow deprecated `v-is` directive (in Vue.js 3.1.0+).
 *
 * @see [no-deprecated-v-is](https://eslint.vuejs.org/rules/no-deprecated-v-is.html)
 */
export type NoDeprecatedVIsRuleConfig = RuleConfig<[]>;

/**
 * Disallow deprecated `v-is` directive (in Vue.js 3.1.0+).
 *
 * @see [no-deprecated-v-is](https://eslint.vuejs.org/rules/no-deprecated-v-is.html)
 */
export interface NoDeprecatedVIsRule {
  /**
   * Disallow deprecated `v-is` directive (in Vue.js 3.1.0+).
   *
   * @see [no-deprecated-v-is](https://eslint.vuejs.org/rules/no-deprecated-v-is.html)
   */
  'vue/no-deprecated-v-is': NoDeprecatedVIsRuleConfig;
}
