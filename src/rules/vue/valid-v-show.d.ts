import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-show` directives
 *
 * @see [valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
 */
export type ValidVShowRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-show` directives
 *
 * @see [valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
 */
export interface ValidVShowRule {
  /**
   * enforce valid `v-show` directives
   *
   * @see [valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
   */
  'vue/valid-v-show': ValidVShowRuleConfig;
}
