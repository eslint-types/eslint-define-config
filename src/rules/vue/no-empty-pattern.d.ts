import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoEmptyPatternOption {
  allowObjectPatternsAsParameters?: boolean;
}

/**
 * Options.
 */
export type NoEmptyPatternOptions = [NoEmptyPatternOption?];

/**
 * Disallow empty destructuring patterns in `<template>`.
 *
 * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
 */
export type NoEmptyPatternRuleConfig = RuleConfig<NoEmptyPatternOptions>;

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
