import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoLoneTemplateOption = {
  /**
   * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
   */
  ignoreAccessible?: any;
};

/**
 * Options.
 */
export type NoLoneTemplateOptions = [NoLoneTemplateOption?];

/**
 * disallow unnecessary `<template>`
 *
 * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
 */
export type NoLoneTemplateRuleConfig = RuleConfig<NoLoneTemplateOptions>;

/**
 * disallow unnecessary `<template>`
 *
 * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
 */
export interface NoLoneTemplateRule {
  /**
   * disallow unnecessary `<template>`
   *
   * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
   */
  'vue/no-lone-template': NoLoneTemplateRuleConfig;
}
