import type { RuleConfig } from '../rule-config';

/**
 * Disallow key of `<template v-for>` placed on child elements.
 *
 * @see [no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
 */
export type NoVForTemplateKeyOnChildRuleConfig = RuleConfig<[]>;

/**
 * Disallow key of `<template v-for>` placed on child elements.
 *
 * @see [no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
 */
export interface NoVForTemplateKeyOnChildRule {
  /**
   * Disallow key of `<template v-for>` placed on child elements.
   *
   * @see [no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
   */
  'vue/no-v-for-template-key-on-child': NoVForTemplateKeyOnChildRuleConfig;
}
