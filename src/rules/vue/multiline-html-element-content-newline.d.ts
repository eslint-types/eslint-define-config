import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MultilineHtmlElementContentNewlineOption = {
  /**
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  ignoreWhenEmpty?: boolean;

  /**
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  ignores?: any[];

  /**
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  allowEmptyLines?: boolean;
};

/**
 * Options.
 */
export type MultilineHtmlElementContentNewlineOptions = [MultilineHtmlElementContentNewlineOption?];

/**
 * Require a line break before and after the contents of a multiline element
 *
 * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
 */
export type MultilineHtmlElementContentNewlineRuleConfig = RuleConfig<MultilineHtmlElementContentNewlineOptions>;

/**
 * Require a line break before and after the contents of a multiline element
 *
 * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
 */
export interface MultilineHtmlElementContentNewlineRule {
  /**
   * Require a line break before and after the contents of a multiline element
   *
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  'vue/multiline-html-element-content-newline': MultilineHtmlElementContentNewlineRuleConfig;
}
