import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SpaceUnaryOpsOption {
  words?: boolean;
  nonwords?: boolean;
  overrides?: {
    [k: string]: boolean;
  };
}

/**
 * Options.
 */
export type SpaceUnaryOpsOptions = [SpaceUnaryOpsOption?];

/**
 * Enforce consistent spacing before or after unary operators in `<template>`.
 *
 * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
 */
export type SpaceUnaryOpsRuleConfig = RuleConfig<SpaceUnaryOpsOptions>;

/**
 * Enforce consistent spacing before or after unary operators in `<template>`.
 *
 * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
 */
export interface SpaceUnaryOpsRule {
  /**
   * Enforce consistent spacing before or after unary operators in `<template>`.
   *
   * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
   */
  'vue/space-unary-ops': SpaceUnaryOpsRuleConfig;
}
