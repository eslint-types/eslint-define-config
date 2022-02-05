import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ArrayBracketSpacingConfig {
  singleValue?: boolean;
  objectsInArrays?: boolean;
  arraysInArrays?: boolean;
}

/**
 * Option.
 */
export type ArrayBracketSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type ArrayBracketSpacingOptions = [
  ArrayBracketSpacingOption?,
  ArrayBracketSpacingConfig?,
];

/**
 * Enforce consistent spacing inside array brackets in `<template>`.
 *
 * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
 */
export type ArrayBracketSpacingRuleConfig =
  RuleConfig<ArrayBracketSpacingOptions>;

/**
 * Enforce consistent spacing inside array brackets in `<template>`.
 *
 * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
 */
export interface ArrayBracketSpacingRule {
  /**
   * Enforce consistent spacing inside array brackets in `<template>`.
   *
   * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
   */
  'vue/array-bracket-spacing': ArrayBracketSpacingRuleConfig;
}
