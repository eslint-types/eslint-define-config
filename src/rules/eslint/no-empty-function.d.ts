import type { RuleConfig } from '../rule-config';

/** Allow Option Entries. */
export type AllowOptionEntries =
  | 'functions' // Normal functions.
  | 'arrowFunctions' // Arrow functions.
  | 'generatorFunctions' // Generator functions.
  | 'methods' // Class methods and method shorthands of object literals.
  | 'generatorMethods' // Class methods and method shorthands of object literals with generator.
  | 'getters' // Getters.
  | 'setters' // Setters.
  | 'constructors' // Class constructors.
  | 'asyncFunctions' // Async functions.
  | 'asyncMethods'; // Async class methods and method shorthands of object literals.

/**
 * Option.
 */
export type NoEmptyFunctionOption = {
  /**
   * Allow specific kinds of functions to be empty.
   *
   * @default []
   *
   * @see [allow](https://eslint.org/docs/rules/no-empty-function#options)
   */
  allow?: AllowOptionEntries[];
};

/**
 * Options.
 */
export type NoEmptyFunctionOptions = [NoEmptyFunctionOption?];

/**
 * Disallow empty functions.
 *
 * @see [no-empty-function](https://eslint.org/docs/rules/no-empty-function)
 */
export type NoEmptyFunctionRuleConfig = RuleConfig<NoEmptyFunctionOptions>;

/**
 * Disallow empty functions.
 *
 * @see [no-empty-function](https://eslint.org/docs/rules/no-empty-function)
 */
export interface NoEmptyFunctionRule {
  /**
   * Disallow empty functions.
   *
   * @see [no-empty-function](https://eslint.org/docs/rules/no-empty-function)
   */
  'no-empty-function': NoEmptyFunctionRuleConfig;
}
