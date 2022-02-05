import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ObjectCurlySpacingConfig {
  arraysInObjects?: boolean;
  objectsInObjects?: boolean;
}

/**
 * Option.
 */
export type ObjectCurlySpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type ObjectCurlySpacingOptions = [
  ObjectCurlySpacingOption?,
  ObjectCurlySpacingConfig?,
];

/**
 * Enforce consistent spacing inside braces in `<template>`.
 *
 * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
 */
export type ObjectCurlySpacingRuleConfig =
  RuleConfig<ObjectCurlySpacingOptions>;

/**
 * Enforce consistent spacing inside braces in `<template>`.
 *
 * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
 */
export interface ObjectCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces in `<template>`.
   *
   * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
   */
  'vue/object-curly-spacing': ObjectCurlySpacingRuleConfig;
}
