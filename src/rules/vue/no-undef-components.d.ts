import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUndefComponentsOption {
  ignorePatterns?: any[];
}

/**
 * Options.
 */
export type NoUndefComponentsOptions = [NoUndefComponentsOption?];

/**
 * Disallow use of undefined components in `<template>`.
 *
 * @see [no-undef-components](https://eslint.vuejs.org/rules/no-undef-components.html)
 */
export type NoUndefComponentsRuleConfig = RuleConfig<NoUndefComponentsOptions>;

/**
 * Disallow use of undefined components in `<template>`.
 *
 * @see [no-undef-components](https://eslint.vuejs.org/rules/no-undef-components.html)
 */
export interface NoUndefComponentsRule {
  /**
   * Disallow use of undefined components in `<template>`.
   *
   * @see [no-undef-components](https://eslint.vuejs.org/rules/no-undef-components.html)
   */
  'vue/no-undef-components': NoUndefComponentsRuleConfig;
}
