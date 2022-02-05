import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DotLocationOption = 'object' | 'property';

/**
 * Options.
 */
export type DotLocationOptions = [DotLocationOption?];

/**
 * Enforce consistent newlines before and after dots in `<template>`.
 *
 * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
 */
export type DotLocationRuleConfig = RuleConfig<DotLocationOptions>;

/**
 * Enforce consistent newlines before and after dots in `<template>`.
 *
 * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
 */
export interface DotLocationRule {
  /**
   * Enforce consistent newlines before and after dots in `<template>`.
   *
   * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
   */
  'vue/dot-location': DotLocationRuleConfig;
}
