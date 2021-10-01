import type { RuleConfig } from '../rule-config';

/**
 * Disallow adding an argument to `v-model` used in custom component.
 *
 * @see [no-v-model-argument](https://eslint.vuejs.org/rules/no-v-model-argument.html)
 */
export type NoVModelArgumentRuleConfig = RuleConfig<[]>;

/**
 * Disallow adding an argument to `v-model` used in custom component.
 *
 * @see [no-v-model-argument](https://eslint.vuejs.org/rules/no-v-model-argument.html)
 */
export interface NoVModelArgumentRule {
  /**
   * Disallow adding an argument to `v-model` used in custom component.
   *
   * @see [no-v-model-argument](https://eslint.vuejs.org/rules/no-v-model-argument.html)
   */
  'vue/no-v-model-argument': NoVModelArgumentRuleConfig;
}
