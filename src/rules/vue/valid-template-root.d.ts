import type { RuleConfig } from '../rule-config';

/**
 * enforce valid template root
 *
 * @see [valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
 */
export type ValidTemplateRootRuleConfig = RuleConfig<[]>;

/**
 * enforce valid template root
 *
 * @see [valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
 */
export interface ValidTemplateRootRule {
  /**
   * enforce valid template root
   *
   * @see [valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
   */
  'vue/valid-template-root': ValidTemplateRootRuleConfig;
}
