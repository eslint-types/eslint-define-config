import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FuncCallSpacingOption =
  | []
  | ['never']
  | []
  | ['always']
  | [
      'always',
      {
        allowNewlines?: boolean;
      },
    ];

/**
 * Options.
 */
export type FuncCallSpacingOptions = FuncCallSpacingOption;

/**
 * Require or disallow spacing between function identifiers and their invocations in `<template>`.
 *
 * @see [func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)
 */
export type FuncCallSpacingRuleConfig = RuleConfig<FuncCallSpacingOptions>;

/**
 * Require or disallow spacing between function identifiers and their invocations in `<template>`.
 *
 * @see [func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)
 */
export interface FuncCallSpacingRule {
  /**
   * Require or disallow spacing between function identifiers and their invocations in `<template>`.
   *
   * @see [func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)
   */
  'vue/func-call-spacing': FuncCallSpacingRuleConfig;
}
