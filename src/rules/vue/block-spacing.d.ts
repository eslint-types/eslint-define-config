import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BlockSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type BlockSpacingOptions = [BlockSpacingOption?];

/**
 * Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`.
 *
 * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
 */
export type BlockSpacingRuleConfig = RuleConfig<BlockSpacingOptions>;

/**
 * Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`.
 *
 * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
 */
export interface BlockSpacingRule {
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`.
   *
   * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
   */
  'vue/block-spacing': BlockSpacingRuleConfig;
}
