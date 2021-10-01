import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `.sync` modifier on `v-bind` directives.
 *
 * @see [valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)
 */
export type ValidVBindSyncRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `.sync` modifier on `v-bind` directives.
 *
 * @see [valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)
 */
export interface ValidVBindSyncRule {
  /**
   * Enforce valid `.sync` modifier on `v-bind` directives.
   *
   * @see [valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)
   */
  'vue/valid-v-bind-sync': ValidVBindSyncRuleConfig;
}
