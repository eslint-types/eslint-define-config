import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-cloak` directives.
 *
 * @see [valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
 */
export type ValidVCloakRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-cloak` directives.
 *
 * @see [valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
 */
export interface ValidVCloakRule {
  /**
   * Enforce valid `v-cloak` directives.
   *
   * @see [valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
   */
  'vue/valid-v-cloak': ValidVCloakRuleConfig;
}
