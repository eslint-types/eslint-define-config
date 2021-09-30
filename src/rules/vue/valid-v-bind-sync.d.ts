import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `.sync` modifier on `v-bind` directives
 *
 * @see [valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)
 */
export type ValidVBindSyncRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `.sync` modifier on `v-bind` directives
 *
 * @see [valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)
 */
export interface ValidVBindSyncRule {
  /**
   * enforce valid `.sync` modifier on `v-bind` directives
   *
   * @see [valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)
   */
  'vue/valid-v-bind-sync': ValidVBindSyncRuleConfig;
}
