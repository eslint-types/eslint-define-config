import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-pre` directives
 *
 * @see [valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
 */
export type ValidVPreRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-pre` directives
 *
 * @see [valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
 */
export interface ValidVPreRule {
  /**
   * enforce valid `v-pre` directives
   *
   * @see [valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
   */
  'vue/valid-v-pre': ValidVPreRuleConfig;
}
