import type { RuleConfig } from '../rule-config';

/**
 * Disallow custom modifiers on v-model used on the component.
 *
 * @see [no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)
 */
export type NoCustomModifiersOnVModelRuleConfig = RuleConfig<[]>;

/**
 * Disallow custom modifiers on v-model used on the component.
 *
 * @see [no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)
 */
export interface NoCustomModifiersOnVModelRule {
  /**
   * Disallow custom modifiers on v-model used on the component.
   *
   * @see [no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)
   */
  'vue/no-custom-modifiers-on-v-model': NoCustomModifiersOnVModelRuleConfig;
}
