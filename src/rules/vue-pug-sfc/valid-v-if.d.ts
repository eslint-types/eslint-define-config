import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-if` directives.
 *
 * @see [valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
 */
export type ValidVIfRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-if` directives.
 *
 * @see [valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
 */
export interface ValidVIfRule {
  /**
   * Enforce valid `v-if` directives.
   *
   * @see [valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
   */
  'vue-pug-sfc/valid-v-if': ValidVIfRuleConfig;
}
