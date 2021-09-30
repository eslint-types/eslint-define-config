import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoParsingErrorOption = {
  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'abrupt-closing-of-empty-comment'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'absence-of-digits-in-numeric-character-reference'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'cdata-in-html-content'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'character-reference-outside-unicode-range'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'control-character-in-input-stream'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'control-character-reference'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'eof-before-tag-name'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'eof-in-cdata'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'eof-in-comment'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'eof-in-tag'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'incorrectly-closed-comment'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'incorrectly-opened-comment'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'invalid-first-character-of-tag-name'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'missing-attribute-value'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'missing-end-tag-name'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'missing-semicolon-after-character-reference'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'missing-whitespace-between-attributes'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'nested-comment'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'noncharacter-character-reference'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'noncharacter-in-input-stream'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'null-character-reference'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'surrogate-character-reference'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'surrogate-in-input-stream'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-character-in-attribute-name'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-character-in-unquoted-attribute-value'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-equals-sign-before-attribute-name'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-null-character'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-question-mark-instead-of-tag-name'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unexpected-solidus-in-tag'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'unknown-named-character-reference'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'end-tag-with-attributes'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'duplicate-attribute'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'end-tag-with-trailing-solidus'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'non-void-html-element-start-tag-with-trailing-solidus'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'x-invalid-end-tag'?: any;

  /**
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'x-invalid-namespace'?: any;
};

/**
 * Options.
 */
export type NoParsingErrorOptions = [NoParsingErrorOption?];

/**
 * disallow parsing errors in `<template>`
 *
 * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
 */
export type NoParsingErrorRuleConfig = RuleConfig<NoParsingErrorOptions>;

/**
 * disallow parsing errors in `<template>`
 *
 * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
 */
export interface NoParsingErrorRule {
  /**
   * disallow parsing errors in `<template>`
   *
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'vue/no-parsing-error': NoParsingErrorRuleConfig;
}
