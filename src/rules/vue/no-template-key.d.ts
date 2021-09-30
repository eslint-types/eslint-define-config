import type { RuleConfig } from '../rule-config';

/**
 * disallow `key` attribute on `<template>`
 *
 * @see [no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
 */
export type NoTemplateKeyRuleConfig = RuleConfig<[]>;

/**
 * disallow `key` attribute on `<template>`
 *
 * @see [no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
 */
export interface NoTemplateKeyRule {
  /**
   * disallow `key` attribute on `<template>`
   *
   * @see [no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
   */
  'vue/no-template-key': NoTemplateKeyRuleConfig;
}
