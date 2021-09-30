import type { RuleConfig } from '../rule-config';

/**
 * require valid keys in model option
 *
 * @see [no-invalid-model-keys](https://eslint.vuejs.org/rules/no-invalid-model-keys.html)
 */
export type NoInvalidModelKeysRuleConfig = RuleConfig<[]>;

/**
 * require valid keys in model option
 *
 * @see [no-invalid-model-keys](https://eslint.vuejs.org/rules/no-invalid-model-keys.html)
 */
export interface NoInvalidModelKeysRule {
  /**
   * require valid keys in model option
   *
   * @see [no-invalid-model-keys](https://eslint.vuejs.org/rules/no-invalid-model-keys.html)
   */
  'vue/no-invalid-model-keys': NoInvalidModelKeysRuleConfig;
}
