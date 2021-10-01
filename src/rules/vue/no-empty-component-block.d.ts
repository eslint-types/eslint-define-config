import type { RuleConfig } from '../rule-config';

/**
 * Disallow the `<template>` `<script>` `<style>` block to be empty.
 *
 * @see [no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html)
 */
export type NoEmptyComponentBlockRuleConfig = RuleConfig<[]>;

/**
 * Disallow the `<template>` `<script>` `<style>` block to be empty.
 *
 * @see [no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html)
 */
export interface NoEmptyComponentBlockRule {
  /**
   * Disallow the `<template>` `<script>` `<style>` block to be empty.
   *
   * @see [no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html)
   */
  'vue/no-empty-component-block': NoEmptyComponentBlockRuleConfig;
}
