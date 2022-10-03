import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TemplateIndentOption {
  indent?: string | number;
  tags?: string[];
  functions?: string[];
  selectors?: string[];
  comments?: string[];
}

/**
 * Options.
 */
export type TemplateIndentOptions = [TemplateIndentOption?];

/**
 * Fix whitespace-insensitive template indentation.
 *
 * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/template-indent.md)
 */
export type TemplateIndentRuleConfig = RuleConfig<TemplateIndentOptions>;

/**
 * Fix whitespace-insensitive template indentation.
 *
 * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/template-indent.md)
 */
export interface TemplateIndentRule {
  /**
   * Fix whitespace-insensitive template indentation.
   *
   * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/template-indent.md)
   */
  'unicorn/template-indent': TemplateIndentRuleConfig;
}
