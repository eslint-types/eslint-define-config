import type { RuleConfig } from '../rule-config';

/**
 * disallow specific argument in `v-bind`
 *
 * @see [no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html)
 */
export type NoRestrictedVBindRuleConfig = RuleConfig<[]>;

/**
 * disallow specific argument in `v-bind`
 *
 * @see [no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html)
 */
export interface NoRestrictedVBindRule {
  /**
   * disallow specific argument in `v-bind`
   *
   * @see [no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html)
   */
  'vue/no-restricted-v-bind': NoRestrictedVBindRuleConfig;
}
