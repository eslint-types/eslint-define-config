import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type QuotePropsOption =
  | []
  | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
  | []
  | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
  | [
      'always' | 'as-needed' | 'consistent' | 'consistent-as-needed',
      {
        keywords?: boolean;
        unnecessary?: boolean;
        numbers?: boolean;
      },
    ];

/**
 * Options.
 */
export type QuotePropsOptions = QuotePropsOption;

/**
 * Require quotes around object literal property names in `<template>`.
 *
 * @see [quote-props](https://eslint.vuejs.org/rules/quote-props.html)
 */
export type QuotePropsRuleConfig = RuleConfig<QuotePropsOptions>;

/**
 * Require quotes around object literal property names in `<template>`.
 *
 * @see [quote-props](https://eslint.vuejs.org/rules/quote-props.html)
 */
export interface QuotePropsRule {
  /**
   * Require quotes around object literal property names in `<template>`.
   *
   * @see [quote-props](https://eslint.vuejs.org/rules/quote-props.html)
   */
  'vue/quote-props': QuotePropsRuleConfig;
}
