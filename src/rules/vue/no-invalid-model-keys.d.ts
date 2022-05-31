import type { RuleConfig } from '../rule-config';

/**
 * Require valid keys in model option.
 *
 * @deprecated
 *
 * @see [no-invalid-model-keys](https://eslint.vuejs.org/rules/no-invalid-model-keys.html)
 */
export type NoInvalidModelKeysRuleConfig = RuleConfig<[]>;

/**
 * Require valid keys in model option.
 *
 * @deprecated
 *
 * @see [no-invalid-model-keys](https://eslint.vuejs.org/rules/no-invalid-model-keys.html)
 */
export interface NoInvalidModelKeysRule {
  /**
   * Require valid keys in model option.
   *
   * @deprecated
   *
   * @see [no-invalid-model-keys](https://eslint.vuejs.org/rules/no-invalid-model-keys.html)
   */
  'vue/no-invalid-model-keys': NoInvalidModelKeysRuleConfig;
}
