import type { RuleConfig } from '../rule-config';

/**
 * Require valid attribute names.
 *
 * @see [valid-attribute-name](https://eslint.vuejs.org/rules/valid-attribute-name.html)
 */
export type ValidAttributeNameRuleConfig = RuleConfig<[]>;

/**
 * Require valid attribute names.
 *
 * @see [valid-attribute-name](https://eslint.vuejs.org/rules/valid-attribute-name.html)
 */
export interface ValidAttributeNameRule {
  /**
   * Require valid attribute names.
   *
   * @see [valid-attribute-name](https://eslint.vuejs.org/rules/valid-attribute-name.html)
   */
  'vue/valid-attribute-name': ValidAttributeNameRuleConfig;
}
