import type { RuleConfig } from '../rule-config';

/**
 * Disallow useless attribute on `<template>`.
 *
 * @see [no-useless-template-attributes](https://eslint.vuejs.org/rules/no-useless-template-attributes.html)
 */
export type NoUselessTemplateAttributesRuleConfig = RuleConfig<[]>;

/**
 * Disallow useless attribute on `<template>`.
 *
 * @see [no-useless-template-attributes](https://eslint.vuejs.org/rules/no-useless-template-attributes.html)
 */
export interface NoUselessTemplateAttributesRule {
  /**
   * Disallow useless attribute on `<template>`.
   *
   * @see [no-useless-template-attributes](https://eslint.vuejs.org/rules/no-useless-template-attributes.html)
   */
  'vue/no-useless-template-attributes': NoUselessTemplateAttributesRuleConfig;
}
