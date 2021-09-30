import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoTemplateTargetBlankOption = {
  /**
   * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
   */
  allowReferrer?: any;

  /**
   * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
   */
  enforceDynamicLinks?: any;
};

/**
 * Options.
 */
export type NoTemplateTargetBlankOptions = [NoTemplateTargetBlankOption?];

/**
 * disallow target="_blank" attribute without rel="noopener noreferrer"
 *
 * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
 */
export type NoTemplateTargetBlankRuleConfig = RuleConfig<NoTemplateTargetBlankOptions>;

/**
 * disallow target="_blank" attribute without rel="noopener noreferrer"
 *
 * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
 */
export interface NoTemplateTargetBlankRule {
  /**
   * disallow target="_blank" attribute without rel="noopener noreferrer"
   *
   * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
   */
  'vue/no-template-target-blank': NoTemplateTargetBlankRuleConfig;
}
