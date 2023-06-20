import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type TemplateCurlySpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type TemplateCurlySpacingOptions = [TemplateCurlySpacingOption?];

/**
 * Require or disallow spacing around embedded expressions of template strings.
 *
 * @see [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)
 */
export type TemplateCurlySpacingRuleConfig =
  RuleConfig<TemplateCurlySpacingOptions>;

/**
 * Require or disallow spacing around embedded expressions of template strings.
 *
 * @see [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)
 */
export interface TemplateCurlySpacingRule {
  /**
   * Require or disallow spacing around embedded expressions of template strings.
   *
   * @see [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)
   */
  'template-curly-spacing': TemplateCurlySpacingRuleConfig;
}
