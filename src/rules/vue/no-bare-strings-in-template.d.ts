import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoBareStringsInTemplateOption = {
  allowlist?: string[];
  attributes?: Record<string, any>;
  directives?: string[];
};

/**
 * Options.
 */
export type NoBareStringsInTemplateOptions = [NoBareStringsInTemplateOption?];

/**
 * Disallow the use of bare strings in `<template>`
 *
 * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
 */
export type NoBareStringsInTemplateRuleConfig = RuleConfig<NoBareStringsInTemplateOptions>;

/**
 * Disallow the use of bare strings in `<template>`
 *
 * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
 */
export interface NoBareStringsInTemplateRule {
  /**
   * Disallow the use of bare strings in `<template>`
   *
   * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
   */
  'vue/no-bare-strings-in-template': NoBareStringsInTemplateRuleConfig;
}
