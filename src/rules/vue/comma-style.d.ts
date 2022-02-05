import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface CommaStyleConfig {
  exceptions?: {
    [k: string]: boolean;
  };
}

/**
 * Option.
 */
export type CommaStyleOption = 'first' | 'last';

/**
 * Options.
 */
export type CommaStyleOptions = [CommaStyleOption?, CommaStyleConfig?];

/**
 * Enforce consistent comma style in `<template>`.
 *
 * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
 */
export type CommaStyleRuleConfig = RuleConfig<CommaStyleOptions>;

/**
 * Enforce consistent comma style in `<template>`.
 *
 * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
 */
export interface CommaStyleRule {
  /**
   * Enforce consistent comma style in `<template>`.
   *
   * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
   */
  'vue/comma-style': CommaStyleRuleConfig;
}
