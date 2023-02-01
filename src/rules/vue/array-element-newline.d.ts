import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ArrayElementNewlineOption =
  | []
  | [
      | BasicConfig
      | {
          ArrayExpression?: BasicConfig;
          ArrayPattern?: BasicConfig;
        },
    ];
export type BasicConfig =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

/**
 * Options.
 */
export type ArrayElementNewlineOptions = ArrayElementNewlineOption;

/**
 * Enforce line breaks after each array element in `<template>`.
 *
 * @see [array-element-newline](https://eslint.vuejs.org/rules/array-element-newline.html)
 */
export type ArrayElementNewlineRuleConfig =
  RuleConfig<ArrayElementNewlineOptions>;

/**
 * Enforce line breaks after each array element in `<template>`.
 *
 * @see [array-element-newline](https://eslint.vuejs.org/rules/array-element-newline.html)
 */
export interface ArrayElementNewlineRule {
  /**
   * Enforce line breaks after each array element in `<template>`.
   *
   * @see [array-element-newline](https://eslint.vuejs.org/rules/array-element-newline.html)
   */
  'vue/array-element-newline': ArrayElementNewlineRuleConfig;
}
