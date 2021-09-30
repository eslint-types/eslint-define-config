import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `defineProps` compiler macro
 *
 * @see [valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
 */
export type ValidDefinePropsRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `defineProps` compiler macro
 *
 * @see [valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
 */
export interface ValidDefinePropsRule {
  /**
   * enforce valid `defineProps` compiler macro
   *
   * @see [valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
   */
  'vue/valid-define-props': ValidDefinePropsRuleConfig;
}
