import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-memo` directives.
 *
 * @see [valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
 */
export type ValidVMemoRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-memo` directives.
 *
 * @see [valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
 */
export interface ValidVMemoRule {
  /**
   * Enforce valid `v-memo` directives.
   *
   * @see [valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
   */
  'vue/valid-v-memo': ValidVMemoRuleConfig;
}
