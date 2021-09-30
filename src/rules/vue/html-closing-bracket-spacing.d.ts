import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type HtmlClosingBracketSpacingOption = {
  startTag?: any;
  endTag?: any;
  selfClosingTag?: any;
};

/**
 * Options.
 */
export type HtmlClosingBracketSpacingOptions = [HtmlClosingBracketSpacingOption?];

/**
 * Require or disallow a space before tag's closing brackets
 *
 * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
 */
export type HtmlClosingBracketSpacingRuleConfig = RuleConfig<HtmlClosingBracketSpacingOptions>;

/**
 * Require or disallow a space before tag's closing brackets
 *
 * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
 */
export interface HtmlClosingBracketSpacingRule {
  /**
   * Require or disallow a space before tag's closing brackets
   *
   * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
   */
  'vue/html-closing-bracket-spacing': HtmlClosingBracketSpacingRuleConfig;
}
