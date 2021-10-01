import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoLoneTemplateOption {
  ignoreAccessible?: boolean;
}

/**
 * Options.
 */
export type NoLoneTemplateOptions = [NoLoneTemplateOption?];

/**
 * Disallow unnecessary `<template>`.
 *
 * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
 */
export type NoLoneTemplateRuleConfig = RuleConfig<NoLoneTemplateOptions>;

/**
 * Disallow unnecessary `<template>`.
 *
 * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
 */
export interface NoLoneTemplateRule {
  /**
   * Disallow unnecessary `<template>`.
   *
   * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
   */
  'vue/no-lone-template': NoLoneTemplateRuleConfig;
}
