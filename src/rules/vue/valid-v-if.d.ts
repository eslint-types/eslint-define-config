import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-if` directives
 *
 * @see [valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
 */
export type ValidVIfRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-if` directives
 *
 * @see [valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
 */
export interface ValidVIfRule {
  /**
   * enforce valid `v-if` directives
   *
   * @see [valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
   */
  'vue/valid-v-if': ValidVIfRuleConfig;
}
