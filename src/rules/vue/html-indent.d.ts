import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface HtmlIndentConfig {
  attribute?: number;
  baseIndent?: number;
  closeBracket?:
    | number
    | {
        startTag?: number;
        endTag?: number;
        selfClosingTag?: number;
      };
  switchCase?: number;
  alignAttributesVertically?: boolean;
  ignores?: string[];
}

/**
 * Option.
 */
export type HtmlIndentOption = number | 'tab';

/**
 * Options.
 */
export type HtmlIndentOptions = [HtmlIndentOption?, HtmlIndentConfig?];

/**
 * Enforce consistent indentation in `<template>`.
 *
 * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
 */
export type HtmlIndentRuleConfig = RuleConfig<HtmlIndentOptions>;

/**
 * Enforce consistent indentation in `<template>`.
 *
 * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
 */
export interface HtmlIndentRule {
  /**
   * Enforce consistent indentation in `<template>`.
   *
   * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
   */
  'vue/html-indent': HtmlIndentRuleConfig;
}
