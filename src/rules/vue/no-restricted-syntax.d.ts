import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedSyntaxOption = (
  | string
  | {
      selector: string;
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedSyntaxOptions = NoRestrictedSyntaxOption;

/**
 * Disallow specified syntax in `<template>`.
 *
 * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
 */
export type NoRestrictedSyntaxRuleConfig =
  RuleConfig<NoRestrictedSyntaxOptions>;

/**
 * Disallow specified syntax in `<template>`.
 *
 * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
 */
export interface NoRestrictedSyntaxRule {
  /**
   * Disallow specified syntax in `<template>`.
   *
   * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
   */
  'vue/no-restricted-syntax': NoRestrictedSyntaxRuleConfig;
}
