import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-else-if` directives.
 *
 * @see [valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)
 */
export type ValidVElseIfRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-else-if` directives.
 *
 * @see [valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)
 */
export interface ValidVElseIfRule {
  /**
   * Enforce valid `v-else-if` directives.
   *
   * @see [valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)
   */
  'vue/valid-v-else-if': ValidVElseIfRuleConfig;
}
