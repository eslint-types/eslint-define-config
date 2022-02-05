import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface SpaceInParensConfig {
  exceptions?: ('{}' | '[]' | '()' | 'empty')[];
}

/**
 * Option.
 */
export type SpaceInParensOption = 'always' | 'never';

/**
 * Options.
 */
export type SpaceInParensOptions = [SpaceInParensOption?, SpaceInParensConfig?];

/**
 * Enforce consistent spacing inside parentheses in `<template>`.
 *
 * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
 */
export type SpaceInParensRuleConfig = RuleConfig<SpaceInParensOptions>;

/**
 * Enforce consistent spacing inside parentheses in `<template>`.
 *
 * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
 */
export interface SpaceInParensRule {
  /**
   * Enforce consistent spacing inside parentheses in `<template>`.
   *
   * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
   */
  'vue/space-in-parens': SpaceInParensRuleConfig;
}
