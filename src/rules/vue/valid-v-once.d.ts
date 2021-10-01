import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-once` directives.
 *
 * @see [valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
 */
export type ValidVOnceRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-once` directives.
 *
 * @see [valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
 */
export interface ValidVOnceRule {
  /**
   * Enforce valid `v-once` directives.
   *
   * @see [valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
   */
  'vue/valid-v-once': ValidVOnceRuleConfig;
}
