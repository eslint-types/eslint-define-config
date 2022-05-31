import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoEmptyFunctionOption {
  allow?: (
    | 'functions'
    | 'arrowFunctions'
    | 'generatorFunctions'
    | 'methods'
    | 'generatorMethods'
    | 'getters'
    | 'setters'
    | 'constructors'
    | 'private-constructors'
    | 'protected-constructors'
    | 'asyncFunctions'
    | 'asyncMethods'
    | 'decoratedFunctions'
    | 'overrideMethods'
  )[];
}

/**
 * Options.
 */
export type NoEmptyFunctionOptions = [NoEmptyFunctionOption?];

/**
 * Disallow empty functions.
 *
 * @see [no-empty-function](https://typescript-eslint.io/rules/no-empty-function)
 */
export type NoEmptyFunctionRuleConfig = RuleConfig<NoEmptyFunctionOptions>;

/**
 * Disallow empty functions.
 *
 * @see [no-empty-function](https://typescript-eslint.io/rules/no-empty-function)
 */
export interface NoEmptyFunctionRule {
  /**
   * Disallow empty functions.
   *
   * @see [no-empty-function](https://typescript-eslint.io/rules/no-empty-function)
   */
  '@typescript-eslint/no-empty-function': NoEmptyFunctionRuleConfig;
}
