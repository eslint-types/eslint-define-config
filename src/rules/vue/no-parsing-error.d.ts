import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoParsingErrorOption {
  'abrupt-closing-of-empty-comment'?: boolean;
  'absence-of-digits-in-numeric-character-reference'?: boolean;
  'cdata-in-html-content'?: boolean;
  'character-reference-outside-unicode-range'?: boolean;
  'control-character-in-input-stream'?: boolean;
  'control-character-reference'?: boolean;
  'eof-before-tag-name'?: boolean;
  'eof-in-cdata'?: boolean;
  'eof-in-comment'?: boolean;
  'eof-in-tag'?: boolean;
  'incorrectly-closed-comment'?: boolean;
  'incorrectly-opened-comment'?: boolean;
  'invalid-first-character-of-tag-name'?: boolean;
  'missing-attribute-value'?: boolean;
  'missing-end-tag-name'?: boolean;
  'missing-semicolon-after-character-reference'?: boolean;
  'missing-whitespace-between-attributes'?: boolean;
  'nested-comment'?: boolean;
  'noncharacter-character-reference'?: boolean;
  'noncharacter-in-input-stream'?: boolean;
  'null-character-reference'?: boolean;
  'surrogate-character-reference'?: boolean;
  'surrogate-in-input-stream'?: boolean;
  'unexpected-character-in-attribute-name'?: boolean;
  'unexpected-character-in-unquoted-attribute-value'?: boolean;
  'unexpected-equals-sign-before-attribute-name'?: boolean;
  'unexpected-null-character'?: boolean;
  'unexpected-question-mark-instead-of-tag-name'?: boolean;
  'unexpected-solidus-in-tag'?: boolean;
  'unknown-named-character-reference'?: boolean;
  'end-tag-with-attributes'?: boolean;
  'duplicate-attribute'?: boolean;
  'end-tag-with-trailing-solidus'?: boolean;
  'non-void-html-element-start-tag-with-trailing-solidus'?: boolean;
  'x-invalid-end-tag'?: boolean;
  'x-invalid-namespace'?: boolean;
}

/**
 * Options.
 */
export type NoParsingErrorOptions = [NoParsingErrorOption?];

/**
 * Disallow parsing errors in `<template>`.
 *
 * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
 */
export type NoParsingErrorRuleConfig = RuleConfig<NoParsingErrorOptions>;

/**
 * Disallow parsing errors in `<template>`.
 *
 * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
 */
export interface NoParsingErrorRule {
  /**
   * Disallow parsing errors in `<template>`.
   *
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'vue/no-parsing-error': NoParsingErrorRuleConfig;
}
