import type { RuleConfig } from '../rule-config';

/**
 * Disallow adding multiple root nodes to the template.
 *
 * @see [no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root.html)
 */
export type NoMultipleTemplateRootRuleConfig = RuleConfig<[]>;

/**
 * Disallow adding multiple root nodes to the template.
 *
 * @see [no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root.html)
 */
export interface NoMultipleTemplateRootRule {
  /**
   * Disallow adding multiple root nodes to the template.
   *
   * @see [no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root.html)
   */
  'vue/no-multiple-template-root': NoMultipleTemplateRootRuleConfig;
}
