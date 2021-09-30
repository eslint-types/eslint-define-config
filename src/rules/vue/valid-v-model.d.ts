import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `v-model` directives
 *
 * @see [valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
 */
export type ValidVModelRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `v-model` directives
 *
 * @see [valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
 */
export interface ValidVModelRule {
  /**
   * enforce valid `v-model` directives
   *
   * @see [valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
   */
  'vue/valid-v-model': ValidVModelRuleConfig;
}
