import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-is` directives
 *
 * @see [valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
 */
export type ValidVIsRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-is` directives
 *
 * @see [valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
 */
export interface ValidVIsRule {
  /**
   * enforce valid `v-is` directives
   *
   * @see [valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
   */
  'vue/valid-v-is': ValidVIsRuleConfig;
}
