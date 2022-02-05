import type { RuleConfig } from '../rule-config';

/**
 * Require template literals instead of string concatenation in `<template>`.
 *
 * @see [prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)
 */
export type PreferTemplateRuleConfig = RuleConfig<[]>;

/**
 * Require template literals instead of string concatenation in `<template>`.
 *
 * @see [prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)
 */
export interface PreferTemplateRule {
  /**
   * Require template literals instead of string concatenation in `<template>`.
   *
   * @see [prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)
   */
  'vue/prefer-template': PreferTemplateRuleConfig;
}
