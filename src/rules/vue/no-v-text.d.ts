import type { RuleConfig } from '../rule-config';

/**
 * disallow use of v-text
 *
 * @see [no-v-text](https://eslint.vuejs.org/rules/no-v-text.html)
 */
export type NoVTextRuleConfig = RuleConfig<[]>;

/**
 * disallow use of v-text
 *
 * @see [no-v-text](https://eslint.vuejs.org/rules/no-v-text.html)
 */
export interface NoVTextRule {
  /**
   * disallow use of v-text
   *
   * @see [no-v-text](https://eslint.vuejs.org/rules/no-v-text.html)
   */
  'vue/no-v-text': NoVTextRuleConfig;
}
