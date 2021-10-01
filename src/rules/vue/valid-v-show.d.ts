import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-show` directives.
 *
 * @see [valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
 */
export type ValidVShowRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-show` directives.
 *
 * @see [valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
 */
export interface ValidVShowRule {
  /**
   * Enforce valid `v-show` directives.
   *
   * @see [valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
   */
  'vue/valid-v-show': ValidVShowRuleConfig;
}
