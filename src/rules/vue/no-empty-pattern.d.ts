import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty destructuring patterns in `<template>`.
 *
 * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
 */
export type NoEmptyPatternRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty destructuring patterns in `<template>`.
 *
 * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
 */
export interface NoEmptyPatternRule {
  /**
   * Disallow empty destructuring patterns in `<template>`.
   *
   * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
   */
  'vue/no-empty-pattern': NoEmptyPatternRuleConfig;
}
