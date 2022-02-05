import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SpaceInfixOpsOption {
  int32Hint?: boolean;
}

/**
 * Options.
 */
export type SpaceInfixOpsOptions = [SpaceInfixOpsOption?];

/**
 * Require spacing around infix operators in `<template>`.
 *
 * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
 */
export type SpaceInfixOpsRuleConfig = RuleConfig<SpaceInfixOpsOptions>;

/**
 * Require spacing around infix operators in `<template>`.
 *
 * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
 */
export interface SpaceInfixOpsRule {
  /**
   * Require spacing around infix operators in `<template>`.
   *
   * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
   */
  'vue/space-infix-ops': SpaceInfixOpsRuleConfig;
}
