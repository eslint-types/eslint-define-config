import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent indentation in `<template>`
 *
 * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
 */
export type HtmlIndentRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent indentation in `<template>`
 *
 * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
 */
export interface HtmlIndentRule {
  /**
   * enforce consistent indentation in `<template>`
   *
   * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
   */
  'vue/html-indent': HtmlIndentRuleConfig;
}
