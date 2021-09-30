import type { RuleConfig } from '../rule-config';

/**
 * disallow custom modifiers on v-model used on the component
 *
 * @see [no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)
 */
export type NoCustomModifiersOnVModelRuleConfig = RuleConfig<[]>;

/**
 * disallow custom modifiers on v-model used on the component
 *
 * @see [no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)
 */
export interface NoCustomModifiersOnVModelRule {
  /**
   * disallow custom modifiers on v-model used on the component
   *
   * @see [no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)
   */
  'vue/no-custom-modifiers-on-v-model': NoCustomModifiersOnVModelRuleConfig;
}
