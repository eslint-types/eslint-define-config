import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface HtmlClosingBracketNewlineOption {
  singleline?: 'always' | 'never';
  multiline?: 'always' | 'never';
}

/**
 * Options.
 */
export type HtmlClosingBracketNewlineOptions = [
  HtmlClosingBracketNewlineOption?,
];

/**
 * Require or disallow a line break before tag's closing brackets.
 *
 * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
 */
export type HtmlClosingBracketNewlineRuleConfig =
  RuleConfig<HtmlClosingBracketNewlineOptions>;

/**
 * Require or disallow a line break before tag's closing brackets.
 *
 * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
 */
export interface HtmlClosingBracketNewlineRule {
  /**
   * Require or disallow a line break before tag's closing brackets.
   *
   * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
   */
  'vue/html-closing-bracket-newline': HtmlClosingBracketNewlineRuleConfig;
}
