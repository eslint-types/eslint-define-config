import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-v-bind-sync](https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html)
 */
export type NoDeprecatedVBindSyncRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-v-bind-sync](https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html)
 */
export interface NoDeprecatedVBindSyncRule {
  /**
   * Disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-v-bind-sync](https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html)
   */
  'vue/no-deprecated-v-bind-sync': NoDeprecatedVBindSyncRuleConfig;
}
