import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-text` directives
 *
 * @see [valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
 */
export type ValidVTextRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-text` directives
 *
 * @see [valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
 */
export interface ValidVTextRule {
  /**
   * enforce valid `v-text` directives
   *
   * @see [valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
   */
  'vue/valid-v-text': ValidVTextRuleConfig;
}
