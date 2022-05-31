import type { RuleConfig } from '../rule-config';

/**
 * Require valid keys in model option.
 *
 * @see [valid-model-definition](https://eslint.vuejs.org/rules/valid-model-definition.html)
 */
export type ValidModelDefinitionRuleConfig = RuleConfig<[]>;

/**
 * Require valid keys in model option.
 *
 * @see [valid-model-definition](https://eslint.vuejs.org/rules/valid-model-definition.html)
 */
export interface ValidModelDefinitionRule {
  /**
   * Require valid keys in model option.
   *
   * @see [valid-model-definition](https://eslint.vuejs.org/rules/valid-model-definition.html)
   */
  'vue/valid-model-definition': ValidModelDefinitionRuleConfig;
}
