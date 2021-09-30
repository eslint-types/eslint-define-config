import type { RuleConfig } from '../rule-config';

/**
 * disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
 */
export type NoDeprecatedVueConfigKeycodesRuleConfig = RuleConfig<[]>;

/**
 * disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
 */
export interface NoDeprecatedVueConfigKeycodesRule {
  /**
   * disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+)
   *
   * @see [no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
   */
  'vue/no-deprecated-vue-config-keycodes': NoDeprecatedVueConfigKeycodesRuleConfig;
}
