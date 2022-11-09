import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MultilineTernaryOption = 'always' | 'always-multiline' | 'never';

/**
 * Options.
 */
export type MultilineTernaryOptions = [MultilineTernaryOption?];

/**
 * Enforce newlines between operands of ternary expressions in `<template>`.
 *
 * @see [multiline-ternary](https://eslint.vuejs.org/rules/multiline-ternary.html)
 */
export type MultilineTernaryRuleConfig = RuleConfig<MultilineTernaryOptions>;

/**
 * Enforce newlines between operands of ternary expressions in `<template>`.
 *
 * @see [multiline-ternary](https://eslint.vuejs.org/rules/multiline-ternary.html)
 */
export interface MultilineTernaryRule {
  /**
   * Enforce newlines between operands of ternary expressions in `<template>`.
   *
   * @see [multiline-ternary](https://eslint.vuejs.org/rules/multiline-ternary.html)
   */
  'vue/multiline-ternary': MultilineTernaryRuleConfig;
}
