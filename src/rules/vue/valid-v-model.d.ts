import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-model` directives.
 *
 * @see [valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
 */
export type ValidVModelRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-model` directives.
 *
 * @see [valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
 */
export interface ValidVModelRule {
  /**
   * Enforce valid `v-model` directives.
   *
   * @see [valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
   */
  'vue/valid-v-model': ValidVModelRuleConfig;
}
