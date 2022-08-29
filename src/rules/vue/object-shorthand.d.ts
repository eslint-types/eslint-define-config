import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ObjectShorthandOption =
  | []
  | [
      | 'always'
      | 'methods'
      | 'properties'
      | 'never'
      | 'consistent'
      | 'consistent-as-needed',
    ]
  | []
  | ['always' | 'methods' | 'properties']
  | [
      'always' | 'methods' | 'properties',
      {
        avoidQuotes?: boolean;
      },
    ]
  | []
  | ['always' | 'methods']
  | [
      'always' | 'methods',
      {
        ignoreConstructors?: boolean;
        methodsIgnorePattern?: string;
        avoidQuotes?: boolean;
        avoidExplicitReturnArrows?: boolean;
      },
    ];

/**
 * Options.
 */
export type ObjectShorthandOptions = ObjectShorthandOption;

/**
 * Require or disallow method and property shorthand syntax for object literals in `<template>`.
 *
 * @see [object-shorthand](https://eslint.vuejs.org/rules/object-shorthand.html)
 */
export type ObjectShorthandRuleConfig = RuleConfig<ObjectShorthandOptions>;

/**
 * Require or disallow method and property shorthand syntax for object literals in `<template>`.
 *
 * @see [object-shorthand](https://eslint.vuejs.org/rules/object-shorthand.html)
 */
export interface ObjectShorthandRule {
  /**
   * Require or disallow method and property shorthand syntax for object literals in `<template>`.
   *
   * @see [object-shorthand](https://eslint.vuejs.org/rules/object-shorthand.html)
   */
  'vue/object-shorthand': ObjectShorthandRuleConfig;
}
