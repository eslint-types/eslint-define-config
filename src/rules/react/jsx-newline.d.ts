import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxNewlineOption {
  prevent?: boolean;
  allowMultilines?: boolean;
}

/**
 * Options.
 */
export type JsxNewlineOptions = [JsxNewlineOption?];

/**
 * Require or prevent a new line after jsx elements and expressions.
 *
 * @see [jsx-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md)
 */
export type JsxNewlineRuleConfig = RuleConfig<JsxNewlineOptions>;

/**
 * Require or prevent a new line after jsx elements and expressions.
 *
 * @see [jsx-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md)
 */
export interface JsxNewlineRule {
  /**
   * Require or prevent a new line after jsx elements and expressions.
   *
   * @see [jsx-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md)
   */
  'react/jsx-newline': JsxNewlineRuleConfig;
}
