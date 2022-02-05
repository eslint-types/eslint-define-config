import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ArrayBracketNewlineOption =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

/**
 * Options.
 */
export type ArrayBracketNewlineOptions = [ArrayBracketNewlineOption?];

/**
 * Enforce linebreaks after opening and before closing array brackets in `<template>`.
 *
 * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
 */
export type ArrayBracketNewlineRuleConfig =
  RuleConfig<ArrayBracketNewlineOptions>;

/**
 * Enforce linebreaks after opening and before closing array brackets in `<template>`.
 *
 * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
 */
export interface ArrayBracketNewlineRule {
  /**
   * Enforce linebreaks after opening and before closing array brackets in `<template>`.
   *
   * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
   */
  'vue/array-bracket-newline': ArrayBracketNewlineRuleConfig;
}
