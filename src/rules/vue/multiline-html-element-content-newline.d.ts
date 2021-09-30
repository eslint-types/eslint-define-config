import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MultilineHtmlElementContentNewlineOption = {
  /**
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  ignoreWhenEmpty?: any;

  /**
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  ignores?: any;

  /**
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  allowEmptyLines?: any;
};

/**
 * Options.
 */
export type MultilineHtmlElementContentNewlineOptions = [MultilineHtmlElementContentNewlineOption?];

/**
 * require a line break before and after the contents of a multiline element
 *
 * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
 */
export type MultilineHtmlElementContentNewlineRuleConfig = RuleConfig<MultilineHtmlElementContentNewlineOptions>;

/**
 * require a line break before and after the contents of a multiline element
 *
 * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
 */
export interface MultilineHtmlElementContentNewlineRule {
  /**
   * require a line break before and after the contents of a multiline element
   *
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  'vue/multiline-html-element-content-newline': MultilineHtmlElementContentNewlineRuleConfig;
}
