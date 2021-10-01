import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `defineProps` compiler macro.
 *
 * @see [valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
 */
export type ValidDefinePropsRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `defineProps` compiler macro.
 *
 * @see [valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
 */
export interface ValidDefinePropsRule {
  /**
   * Enforce valid `defineProps` compiler macro.
   *
   * @see [valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
   */
  'vue/valid-define-props': ValidDefinePropsRuleConfig;
}
