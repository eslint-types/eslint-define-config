import type { RuleConfig } from '../rule-config';

/**
 * Require or disallow spacing around embedded expressions of template strings
 *
 * @see [template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)
 */
export type TemplateCurlySpacingRuleConfig = RuleConfig<[]>;

/**
 * Require or disallow spacing around embedded expressions of template strings
 *
 * @see [template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)
 */
export interface TemplateCurlySpacingRule {
  /**
   * Require or disallow spacing around embedded expressions of template strings
   *
   * @see [template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)
   */
  'vue/template-curly-spacing': TemplateCurlySpacingRuleConfig;
}
