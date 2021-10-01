import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
 */
export type NoDeprecatedVueConfigKeycodesRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
 */
export interface NoDeprecatedVueConfigKeycodesRule {
  /**
   * Disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
   */
  'vue/no-deprecated-vue-config-keycodes': NoDeprecatedVueConfigKeycodesRuleConfig;
}
