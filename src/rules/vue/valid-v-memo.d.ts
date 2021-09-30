import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-memo` directives
 *
 * @see [valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
 */
export type ValidVMemoRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-memo` directives
 *
 * @see [valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
 */
export interface ValidVMemoRule {
  /**
   * enforce valid `v-memo` directives
   *
   * @see [valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
   */
  'vue/valid-v-memo': ValidVMemoRuleConfig;
}
