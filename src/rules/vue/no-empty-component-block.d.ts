import type { RuleConfig } from '../rule-config';

/**
 * disallow the `<template>` `<script>` `<style>` block to be empty
 *
 * @see [no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html)
 */
export type NoEmptyComponentBlockRuleConfig = RuleConfig<[]>;

/**
 * disallow the `<template>` `<script>` `<style>` block to be empty
 *
 * @see [no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html)
 */
export interface NoEmptyComponentBlockRule {
  /**
   * disallow the `<template>` `<script>` `<style>` block to be empty
   *
   * @see [no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html)
   */
  'vue/no-empty-component-block': NoEmptyComponentBlockRuleConfig;
}
