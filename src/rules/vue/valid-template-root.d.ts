import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid template root.
 *
 * @see [valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
 */
export type ValidTemplateRootRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid template root.
 *
 * @see [valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
 */
export interface ValidTemplateRootRule {
  /**
   * Enforce valid template root.
   *
   * @see [valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
   */
  'vue/valid-template-root': ValidTemplateRootRuleConfig;
}
