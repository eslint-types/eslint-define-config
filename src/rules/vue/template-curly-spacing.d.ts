import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type TemplateCurlySpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type TemplateCurlySpacingOptions = [TemplateCurlySpacingOption?];

/**
 * Require or disallow spacing around embedded expressions of template strings in `<template>`.
 *
 * @see [template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)
 */
export type TemplateCurlySpacingRuleConfig =
  RuleConfig<TemplateCurlySpacingOptions>;

/**
 * Require or disallow spacing around embedded expressions of template strings in `<template>`.
 *
 * @see [template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)
 */
export interface TemplateCurlySpacingRule {
  /**
   * Require or disallow spacing around embedded expressions of template strings in `<template>`.
   *
   * @see [template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)
   */
  'vue/template-curly-spacing': TemplateCurlySpacingRuleConfig;
}
