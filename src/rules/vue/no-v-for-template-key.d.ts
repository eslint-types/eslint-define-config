import type { RuleConfig } from '../rule-config';

/**
 * disallow `key` attribute on `<template v-for>`
 *
 * @see [no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)
 */
export type NoVForTemplateKeyRuleConfig = RuleConfig<[]>;

/**
 * disallow `key` attribute on `<template v-for>`
 *
 * @see [no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)
 */
export interface NoVForTemplateKeyRule {
  /**
   * disallow `key` attribute on `<template v-for>`
   *
   * @see [no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)
   */
  'vue/no-v-for-template-key': NoVForTemplateKeyRuleConfig;
}
