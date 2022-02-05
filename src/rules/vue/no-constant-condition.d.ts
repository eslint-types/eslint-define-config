import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoConstantConditionOption {
  checkLoops?: boolean;
}

/**
 * Options.
 */
export type NoConstantConditionOptions = [NoConstantConditionOption?];

/**
 * Disallow constant expressions in conditions in `<template>`.
 *
 * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
 */
export type NoConstantConditionRuleConfig =
  RuleConfig<NoConstantConditionOptions>;

/**
 * Disallow constant expressions in conditions in `<template>`.
 *
 * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
 */
export interface NoConstantConditionRule {
  /**
   * Disallow constant expressions in conditions in `<template>`.
   *
   * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
   */
  'vue/no-constant-condition': NoConstantConditionRuleConfig;
}
