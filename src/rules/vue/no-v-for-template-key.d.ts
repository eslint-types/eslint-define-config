import type { RuleConfig } from '../rule-config';

/**
 * Disallow `key` attribute on `<template v-for>`.
 *
 * @see [no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)
 */
export type NoVForTemplateKeyRuleConfig = RuleConfig<[]>;

/**
 * Disallow `key` attribute on `<template v-for>`.
 *
 * @see [no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)
 */
export interface NoVForTemplateKeyRule {
  /**
   * Disallow `key` attribute on `<template v-for>`.
   *
   * @see [no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)
   */
  'vue/no-v-for-template-key': NoVForTemplateKeyRuleConfig;
}
