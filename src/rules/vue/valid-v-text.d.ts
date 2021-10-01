import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-text` directives.
 *
 * @see [valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
 */
export type ValidVTextRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-text` directives.
 *
 * @see [valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
 */
export interface ValidVTextRule {
  /**
   * Enforce valid `v-text` directives.
   *
   * @see [valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
   */
  'vue/valid-v-text': ValidVTextRuleConfig;
}
