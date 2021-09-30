import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type HtmlClosingBracketNewlineOption = {
  /**
   * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
   */
  singleline?: any;

  /**
   * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
   */
  multiline?: any;
};

/**
 * Options.
 */
export type HtmlClosingBracketNewlineOptions = [HtmlClosingBracketNewlineOption?];

/**
 * require or disallow a line break before tag's closing brackets
 *
 * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
 */
export type HtmlClosingBracketNewlineRuleConfig = RuleConfig<HtmlClosingBracketNewlineOptions>;

/**
 * require or disallow a line break before tag's closing brackets
 *
 * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
 */
export interface HtmlClosingBracketNewlineRule {
  /**
   * require or disallow a line break before tag's closing brackets
   *
   * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
   */
  'vue/html-closing-bracket-newline': HtmlClosingBracketNewlineRuleConfig;
}
