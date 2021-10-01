import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-for` directives.
 *
 * @see [valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
 */
export type ValidVForRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-for` directives.
 *
 * @see [valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
 */
export interface ValidVForRule {
  /**
   * Enforce valid `v-for` directives.
   *
   * @see [valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
   */
  'vue/valid-v-for': ValidVForRuleConfig;
}
