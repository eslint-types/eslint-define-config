import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CommentDirectiveOption = {
  /**
   * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
   */
  reportUnusedDisableDirectives?: any;
};

/**
 * Options.
 */
export type CommentDirectiveOptions = [CommentDirectiveOption?];

/**
 * support comment-directives in `<template>`
 *
 * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
 */
export type CommentDirectiveRuleConfig = RuleConfig<CommentDirectiveOptions>;

/**
 * support comment-directives in `<template>`
 *
 * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
 */
export interface CommentDirectiveRule {
  /**
   * support comment-directives in `<template>`
   *
   * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
   */
  'vue/comment-directive': CommentDirectiveRuleConfig;
}
