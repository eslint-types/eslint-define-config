import type { RuleConfig } from '../rule-config';

/**
 * Disallow confusing `v-for` and `v-if` on the same element.
 *
 * @deprecated
 *
 * @see [no-confusing-v-for-v-if](https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html)
 */
export type NoConfusingVForVIfRuleConfig = RuleConfig<[]>;

/**
 * Disallow confusing `v-for` and `v-if` on the same element.
 *
 * @deprecated
 *
 * @see [no-confusing-v-for-v-if](https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html)
 */
export interface NoConfusingVForVIfRule {
  /**
   * Disallow confusing `v-for` and `v-if` on the same element.
   *
   * @deprecated
   *
   * @see [no-confusing-v-for-v-if](https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html)
   */
  'vue/no-confusing-v-for-v-if': NoConfusingVForVIfRuleConfig;
}
