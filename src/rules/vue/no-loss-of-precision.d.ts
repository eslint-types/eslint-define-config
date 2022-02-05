import type { RuleConfig } from '../rule-config';

/**
 * Disallow literal numbers that lose precision in `<template>`.
 *
 * @see [no-loss-of-precision](https://eslint.vuejs.org/rules/no-loss-of-precision.html)
 */
export type NoLossOfPrecisionRuleConfig = RuleConfig<[]>;

/**
 * Disallow literal numbers that lose precision in `<template>`.
 *
 * @see [no-loss-of-precision](https://eslint.vuejs.org/rules/no-loss-of-precision.html)
 */
export interface NoLossOfPrecisionRule {
  /**
   * Disallow literal numbers that lose precision in `<template>`.
   *
   * @see [no-loss-of-precision](https://eslint.vuejs.org/rules/no-loss-of-precision.html)
   */
  'vue/no-loss-of-precision': NoLossOfPrecisionRuleConfig;
}
