import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-else` directives.
 *
 * @see [valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
 */
export type ValidVElseRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-else` directives.
 *
 * @see [valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
 */
export interface ValidVElseRule {
  /**
   * Enforce valid `v-else` directives.
   *
   * @see [valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
   */
  'vue/valid-v-else': ValidVElseRuleConfig;
}
