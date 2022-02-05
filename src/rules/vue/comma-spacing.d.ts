import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CommaSpacingOption {
  before?: boolean;
  after?: boolean;
}

/**
 * Options.
 */
export type CommaSpacingOptions = [CommaSpacingOption?];

/**
 * Enforce consistent spacing before and after commas in `<template>`.
 *
 * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
 */
export type CommaSpacingRuleConfig = RuleConfig<CommaSpacingOptions>;

/**
 * Enforce consistent spacing before and after commas in `<template>`.
 *
 * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
 */
export interface CommaSpacingRule {
  /**
   * Enforce consistent spacing before and after commas in `<template>`.
   *
   * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
   */
  'vue/comma-spacing': CommaSpacingRuleConfig;
}
