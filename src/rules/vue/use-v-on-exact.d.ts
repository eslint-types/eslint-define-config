import type { RuleConfig } from '../rule-config';

/**
 * enforce usage of `exact` modifier on `v-on`
 *
 * @see [use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact.html)
 */
export type UseVOnExactRuleConfig = RuleConfig<[]>;

/**
 * enforce usage of `exact` modifier on `v-on`
 *
 * @see [use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact.html)
 */
export interface UseVOnExactRule {
  /**
   * enforce usage of `exact` modifier on `v-on`
   *
   * @see [use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact.html)
   */
  'vue/use-v-on-exact': UseVOnExactRuleConfig;
}
