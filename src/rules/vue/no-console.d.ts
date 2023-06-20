import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoConsoleOption {
  /**
   * @minItems 1
   */
  allow?: [string, ...string[]];
}

/**
 * Options.
 */
export type NoConsoleOptions = [NoConsoleOption?];

/**
 * Disallow the use of `console` in `<template>`.
 *
 * @see [no-console](https://eslint.vuejs.org/rules/no-console.html)
 */
export type NoConsoleRuleConfig = RuleConfig<NoConsoleOptions>;

/**
 * Disallow the use of `console` in `<template>`.
 *
 * @see [no-console](https://eslint.vuejs.org/rules/no-console.html)
 */
export interface NoConsoleRule {
  /**
   * Disallow the use of `console` in `<template>`.
   *
   * @see [no-console](https://eslint.vuejs.org/rules/no-console.html)
   */
  'vue/no-console': NoConsoleRuleConfig;
}
