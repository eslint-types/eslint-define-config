import type { RuleConfig } from '../rule-config';

/**
 * Prevent `<script setup>` variables used in `<template>` to be marked as unused.
 *
 * @deprecated
 *
 * @see [script-setup-uses-vars](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)
 */
export type ScriptSetupUsesVarsRuleConfig = RuleConfig<[]>;

/**
 * Prevent `<script setup>` variables used in `<template>` to be marked as unused.
 *
 * @deprecated
 *
 * @see [script-setup-uses-vars](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)
 */
export interface ScriptSetupUsesVarsRule {
  /**
   * Prevent `<script setup>` variables used in `<template>` to be marked as unused.
   *
   * @deprecated
   *
   * @see [script-setup-uses-vars](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)
   */
  'vue/script-setup-uses-vars': ScriptSetupUsesVarsRuleConfig;
}
