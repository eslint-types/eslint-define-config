import type { RuleConfig } from '../rule-config';

/**
 * prevent `<script setup>` variables used in `<template>` to be marked as unused
 *
 * @see [script-setup-uses-vars](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)
 */
export type ScriptSetupUsesVarsRuleConfig = RuleConfig<[]>;

/**
 * prevent `<script setup>` variables used in `<template>` to be marked as unused
 *
 * @see [script-setup-uses-vars](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)
 */
export interface ScriptSetupUsesVarsRule {
  /**
   * prevent `<script setup>` variables used in `<template>` to be marked as unused
   *
   * @see [script-setup-uses-vars](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)
   */
  'vue/script-setup-uses-vars': ScriptSetupUsesVarsRuleConfig;
}
