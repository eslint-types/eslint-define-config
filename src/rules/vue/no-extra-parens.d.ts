import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoExtraParensOption =
  | []
  | ['functions']
  | []
  | ['all']
  | [
      'all',
      {
        conditionalAssign?: boolean;
        ternaryOperandBinaryExpressions?: boolean;
        nestedBinaryExpressions?: boolean;
        returnAssign?: boolean;
        ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
        enforceForArrowConditionals?: boolean;
        enforceForSequenceExpressions?: boolean;
        enforceForNewInMemberExpressions?: boolean;
        enforceForFunctionPrototypeMethods?: boolean;
        allowParensAfterCommentPattern?: string;
      },
    ];

/**
 * Options.
 */
export type NoExtraParensOptions = NoExtraParensOption;

/**
 * Disallow unnecessary parentheses in `<template>`.
 *
 * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
 */
export type NoExtraParensRuleConfig = RuleConfig<NoExtraParensOptions>;

/**
 * Disallow unnecessary parentheses in `<template>`.
 *
 * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
 */
export interface NoExtraParensRule {
  /**
   * Disallow unnecessary parentheses in `<template>`.
   *
   * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
   */
  'vue/no-extra-parens': NoExtraParensRuleConfig;
}
