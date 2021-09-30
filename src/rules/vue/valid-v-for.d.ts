import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-for` directives
 *
 * @see [valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
 */
export type ValidVForRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-for` directives
 *
 * @see [valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
 */
export interface ValidVForRule {
  /**
   * enforce valid `v-for` directives
   *
   * @see [valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
   */
  'vue/valid-v-for': ValidVForRuleConfig;
}
