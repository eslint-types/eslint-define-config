import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `defineEmits` compiler macro
 *
 * @see [valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
 */
export type ValidDefineEmitsRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `defineEmits` compiler macro
 *
 * @see [valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
 */
export interface ValidDefineEmitsRule {
  /**
   * enforce valid `defineEmits` compiler macro
   *
   * @see [valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
   */
  'vue/valid-define-emits': ValidDefineEmitsRuleConfig;
}
