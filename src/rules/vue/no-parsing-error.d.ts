import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoParsingErrorOption = {
  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'abrupt-closing-of-empty-comment'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'absence-of-digits-in-numeric-character-reference'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'cdata-in-html-content'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'character-reference-outside-unicode-range'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'control-character-in-input-stream'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'control-character-reference'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'eof-before-tag-name'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'eof-in-cdata'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'eof-in-comment'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'eof-in-tag'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'incorrectly-closed-comment'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'incorrectly-opened-comment'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'invalid-first-character-of-tag-name'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'missing-attribute-value'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'missing-end-tag-name'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'missing-semicolon-after-character-reference'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'missing-whitespace-between-attributes'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'nested-comment'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'noncharacter-character-reference'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'noncharacter-in-input-stream'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'null-character-reference'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'surrogate-character-reference'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'surrogate-in-input-stream'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-character-in-attribute-name'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-character-in-unquoted-attribute-value'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-equals-sign-before-attribute-name'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-null-character'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-question-mark-instead-of-tag-name'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-solidus-in-tag'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unknown-named-character-reference'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'end-tag-with-attributes'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'duplicate-attribute'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'end-tag-with-trailing-solidus'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'non-void-html-element-start-tag-with-trailing-solidus'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'x-invalid-end-tag'?: boolean;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'x-invalid-namespace'?: boolean;
};

/**
 * Options.
 */
export type NoParsingErrorOptions = [NoParsingErrorOption?];

/**
 * Disallow parsing errors in `<template>`
 *
 * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
 */
export type NoParsingErrorRuleConfig = RuleConfig<NoParsingErrorOptions>;

/**
 * Disallow parsing errors in `<template>`
 *
 * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
 */
export interface NoParsingErrorRule {
  /**
   * Disallow parsing errors in `<template>`
   *
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'vue/no-parsing-error': NoParsingErrorRuleConfig;
}
