import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ArrowSpacingOption {
  before?: boolean;
  after?: boolean;
}

/**
 * Options.
 */
export type ArrowSpacingOptions = [ArrowSpacingOption?];

/**
 * Enforce consistent spacing before and after the arrow in arrow functions in `<template>`.
 *
 * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
 */
export type ArrowSpacingRuleConfig = RuleConfig<ArrowSpacingOptions>;

/**
 * Enforce consistent spacing before and after the arrow in arrow functions in `<template>`.
 *
 * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
 */
export interface ArrowSpacingRule {
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions in `<template>`.
   *
   * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
   */
  'vue/arrow-spacing': ArrowSpacingRuleConfig;
}
