import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface OperatorLinebreakConfig {
  overrides?: {
    [k: string]: 'after' | 'before' | 'none' | 'ignore';
  };
}

/**
 * Option.
 */
export type OperatorLinebreakOption = 'after' | 'before' | 'none' | null;

/**
 * Options.
 */
export type OperatorLinebreakOptions = [
  OperatorLinebreakOption?,
  OperatorLinebreakConfig?,
];

/**
 * Enforce consistent linebreak style for operators in `<template>`.
 *
 * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
 */
export type OperatorLinebreakRuleConfig = RuleConfig<OperatorLinebreakOptions>;

/**
 * Enforce consistent linebreak style for operators in `<template>`.
 *
 * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
 */
export interface OperatorLinebreakRule {
  /**
   * Enforce consistent linebreak style for operators in `<template>`.
   *
   * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
   */
  'vue/operator-linebreak': OperatorLinebreakRuleConfig;
}
