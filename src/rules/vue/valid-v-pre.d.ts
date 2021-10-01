import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-pre` directives.
 *
 * @see [valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
 */
export type ValidVPreRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-pre` directives.
 *
 * @see [valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
 */
export interface ValidVPreRule {
  /**
   * Enforce valid `v-pre` directives.
   *
   * @see [valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
   */
  'vue/valid-v-pre': ValidVPreRuleConfig;
}
