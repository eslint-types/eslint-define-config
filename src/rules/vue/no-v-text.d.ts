import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of v-text.
 *
 * @see [no-v-text](https://eslint.vuejs.org/rules/no-v-text.html)
 */
export type NoVTextRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of v-text.
 *
 * @see [no-v-text](https://eslint.vuejs.org/rules/no-v-text.html)
 */
export interface NoVTextRule {
  /**
   * Disallow use of v-text.
   *
   * @see [no-v-text](https://eslint.vuejs.org/rules/no-v-text.html)
   */
  'vue/no-v-text': NoVTextRuleConfig;
}
