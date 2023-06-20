import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `defineOptions` compiler macro.
 *
 * @see [valid-define-options](https://eslint.vuejs.org/rules/valid-define-options.html)
 */
export type ValidDefineOptionsRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `defineOptions` compiler macro.
 *
 * @see [valid-define-options](https://eslint.vuejs.org/rules/valid-define-options.html)
 */
export interface ValidDefineOptionsRule {
  /**
   * Enforce valid `defineOptions` compiler macro.
   *
   * @see [valid-define-options](https://eslint.vuejs.org/rules/valid-define-options.html)
   */
  'vue/valid-define-options': ValidDefineOptionsRuleConfig;
}
