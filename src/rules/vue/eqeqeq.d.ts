import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type EqeqeqOption =
  | []
  | ['always']
  | [
      'always',
      {
        null?: 'always' | 'never' | 'ignore';
      },
    ]
  | []
  | ['smart' | 'allow-null'];

/**
 * Options.
 */
export type EqeqeqOptions = EqeqeqOption;

/**
 * Require the use of `===` and `!==` in `<template>`.
 *
 * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
 */
export type EqeqeqRuleConfig = RuleConfig<EqeqeqOptions>;

/**
 * Require the use of `===` and `!==` in `<template>`.
 *
 * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
 */
export interface EqeqeqRule {
  /**
   * Require the use of `===` and `!==` in `<template>`.
   *
   * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
   */
  'vue/eqeqeq': EqeqeqRuleConfig;
}
