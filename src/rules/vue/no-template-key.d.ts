import type { RuleConfig } from '../rule-config';

/**
 * Disallow `key` attribute on `<template>`.
 *
 * @see [no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
 */
export type NoTemplateKeyRuleConfig = RuleConfig<[]>;

/**
 * Disallow `key` attribute on `<template>`.
 *
 * @see [no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
 */
export interface NoTemplateKeyRule {
  /**
   * Disallow `key` attribute on `<template>`.
   *
   * @see [no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
   */
  'vue/no-template-key': NoTemplateKeyRuleConfig;
}
