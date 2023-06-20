import type { RuleConfig } from '../rule-config';

/**
 * Enforce use of `defineOptions` instead of default export.
 *
 * @see [prefer-define-options](https://eslint.vuejs.org/rules/prefer-define-options.html)
 */
export type PreferDefineOptionsRuleConfig = RuleConfig<[]>;

/**
 * Enforce use of `defineOptions` instead of default export.
 *
 * @see [prefer-define-options](https://eslint.vuejs.org/rules/prefer-define-options.html)
 */
export interface PreferDefineOptionsRule {
  /**
   * Enforce use of `defineOptions` instead of default export.
   *
   * @see [prefer-define-options](https://eslint.vuejs.org/rules/prefer-define-options.html)
   */
  'vue/prefer-define-options': PreferDefineOptionsRuleConfig;
}
