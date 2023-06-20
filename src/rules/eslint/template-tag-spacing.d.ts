import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type TemplateTagSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type TemplateTagSpacingOptions = [TemplateTagSpacingOption?];

/**
 * Require or disallow spacing between template tags and their literals.
 *
 * @see [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing)
 */
export type TemplateTagSpacingRuleConfig =
  RuleConfig<TemplateTagSpacingOptions>;

/**
 * Require or disallow spacing between template tags and their literals.
 *
 * @see [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing)
 */
export interface TemplateTagSpacingRule {
  /**
   * Require or disallow spacing between template tags and their literals.
   *
   * @see [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing)
   */
  'template-tag-spacing': TemplateTagSpacingRuleConfig;
}
