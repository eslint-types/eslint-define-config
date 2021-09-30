import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-cloak` directives
 *
 * @see [valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
 */
export type ValidVCloakRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-cloak` directives
 *
 * @see [valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
 */
export interface ValidVCloakRule {
  /**
   * enforce valid `v-cloak` directives
   *
   * @see [valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
   */
  'vue/valid-v-cloak': ValidVCloakRuleConfig;
}
