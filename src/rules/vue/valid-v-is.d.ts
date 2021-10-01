import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-is` directives.
 *
 * @see [valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
 */
export type ValidVIsRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-is` directives.
 *
 * @see [valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
 */
export interface ValidVIsRule {
  /**
   * Enforce valid `v-is` directives.
   *
   * @see [valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
   */
  'vue/valid-v-is': ValidVIsRuleConfig;
}
