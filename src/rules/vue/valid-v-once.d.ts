import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-once` directives
 *
 * @see [valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
 */
export type ValidVOnceRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-once` directives
 *
 * @see [valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
 */
export interface ValidVOnceRule {
  /**
   * enforce valid `v-once` directives
   *
   * @see [valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
   */
  'vue/valid-v-once': ValidVOnceRuleConfig;
}
