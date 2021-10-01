import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `defineEmits` compiler macro.
 *
 * @see [valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
 */
export type ValidDefineEmitsRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `defineEmits` compiler macro.
 *
 * @see [valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
 */
export interface ValidDefineEmitsRule {
  /**
   * Enforce valid `defineEmits` compiler macro.
   *
   * @see [valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
   */
  'vue/valid-define-emits': ValidDefineEmitsRuleConfig;
}
