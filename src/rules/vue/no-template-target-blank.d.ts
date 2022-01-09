import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoTemplateTargetBlankOption {
  allowReferrer?: boolean;
  enforceDynamicLinks?: 'always' | 'never';
}

/**
 * Options.
 */
export type NoTemplateTargetBlankOptions = [NoTemplateTargetBlankOption?];

/**
 * Disallow target="_blank" attribute without rel="noopener noreferrer".
 *
 * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
 */
export type NoTemplateTargetBlankRuleConfig =
  RuleConfig<NoTemplateTargetBlankOptions>;

/**
 * Disallow target="_blank" attribute without rel="noopener noreferrer".
 *
 * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
 */
export interface NoTemplateTargetBlankRule {
  /**
   * Disallow target="_blank" attribute without rel="noopener noreferrer".
   *
   * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
   */
  'vue/no-template-target-blank': NoTemplateTargetBlankRuleConfig;
}
