import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type HtmlIndentConfig = {
  attribute?: number;
  baseIndent?: number;
  closeBracket?: any;
  switchCase?: number;
  alignAttributesVertically?: boolean;
  ignores?: any[];
};

/**
 * Option.
 */
export type HtmlIndentOption = any;

/**
 * Options.
 */
export type HtmlIndentOptions = [HtmlIndentOption?, HtmlIndentConfig?];

/**
 * Enforce consistent indentation in `<template>`
 *
 * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
 */
export type HtmlIndentRuleConfig = RuleConfig<HtmlIndentOptions>;

/**
 * Enforce consistent indentation in `<template>`
 *
 * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
 */
export interface HtmlIndentRule {
  /**
   * Enforce consistent indentation in `<template>`
   *
   * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
   */
  'vue/html-indent': HtmlIndentRuleConfig;
}
