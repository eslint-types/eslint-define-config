import type { RuleConfig } from '../rule-config';

/**
 * disallow confusing `v-for` and `v-if` on the same element
 *
 * @see [no-confusing-v-for-v-if](https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html)
 */
export type NoConfusingVForVIfRuleConfig = RuleConfig<[]>;

/**
 * disallow confusing `v-for` and `v-if` on the same element
 *
 * @see [no-confusing-v-for-v-if](https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html)
 */
export interface NoConfusingVForVIfRule {
  /**
   * disallow confusing `v-for` and `v-if` on the same element
   *
   * @see [no-confusing-v-for-v-if](https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html)
   */
  'vue/no-confusing-v-for-v-if': NoConfusingVForVIfRuleConfig;
}
