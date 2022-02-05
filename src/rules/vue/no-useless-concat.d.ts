import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary concatenation of literals or template literals in `<template>`.
 *
 * @see [no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html)
 */
export type NoUselessConcatRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary concatenation of literals or template literals in `<template>`.
 *
 * @see [no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html)
 */
export interface NoUselessConcatRule {
  /**
   * Disallow unnecessary concatenation of literals or template literals in `<template>`.
   *
   * @see [no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html)
   */
  'vue/no-useless-concat': NoUselessConcatRuleConfig;
}
