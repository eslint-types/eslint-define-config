import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ObjectPropertyNewlineOption {
  allowAllPropertiesOnSameLine?: boolean;
  allowMultiplePropertiesPerLine?: boolean;
}

/**
 * Options.
 */
export type ObjectPropertyNewlineOptions = [ObjectPropertyNewlineOption?];

/**
 * Enforce placing object properties on separate lines in `<template>`.
 *
 * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
 */
export type ObjectPropertyNewlineRuleConfig =
  RuleConfig<ObjectPropertyNewlineOptions>;

/**
 * Enforce placing object properties on separate lines in `<template>`.
 *
 * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
 */
export interface ObjectPropertyNewlineRule {
  /**
   * Enforce placing object properties on separate lines in `<template>`.
   *
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  'vue/object-property-newline': ObjectPropertyNewlineRuleConfig;
}
