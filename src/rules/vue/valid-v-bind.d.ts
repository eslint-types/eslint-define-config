import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-bind` directives
 *
 * @see [valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
 */
export type ValidVBindRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-bind` directives
 *
 * @see [valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
 */
export interface ValidVBindRule {
  /**
   * enforce valid `v-bind` directives
   *
   * @see [valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
   */
  'vue/valid-v-bind': ValidVBindRuleConfig;
}
