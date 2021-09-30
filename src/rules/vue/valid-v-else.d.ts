import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-else` directives
 *
 * @see [valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
 */
export type ValidVElseRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-else` directives
 *
 * @see [valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
 */
export interface ValidVElseRule {
  /**
   * enforce valid `v-else` directives
   *
   * @see [valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
   */
  'vue/valid-v-else': ValidVElseRuleConfig;
}
