import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CommentDirectiveOption {
  reportUnusedDisableDirectives?: boolean;
}

/**
 * Options.
 */
export type CommentDirectiveOptions = [CommentDirectiveOption?];

/**
 * Support comment-directives in `<template>`.
 *
 * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
 */
export type CommentDirectiveRuleConfig = RuleConfig<CommentDirectiveOptions>;

/**
 * Support comment-directives in `<template>`.
 *
 * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
 */
export interface CommentDirectiveRule {
  /**
   * Support comment-directives in `<template>`.
   *
   * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
   */
  'vue/comment-directive': CommentDirectiveRuleConfig;
}
