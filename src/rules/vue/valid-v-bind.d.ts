import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-bind` directives.
 *
 * @see [valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
 */
export type ValidVBindRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-bind` directives.
 *
 * @see [valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
 */
export interface ValidVBindRule {
  /**
   * Enforce valid `v-bind` directives.
   *
   * @see [valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
   */
  'vue/valid-v-bind': ValidVBindRuleConfig;
}
