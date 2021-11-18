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
  )[];
}

/**
 * Options.
 */
export type NoEmptyFunctionOptions = [NoEmptyFunctionOption?];

/**
 * Disallow empty functions.
 *
 * @see [no-empty-function](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-empty-function.md)
 */
export type NoEmptyFunctionRuleConfig = RuleConfig<NoEmptyFunctionOptions>;

/**
 * Disallow empty functions.
 *
 * @see [no-empty-function](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-empty-function.md)
 */
export interface NoEmptyFunctionRule {
  /**
   * Disallow empty functions.
   *
   * @see [no-empty-function](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-empty-function.md)
   */
  '@typescript-eslint/no-empty-function': NoEmptyFunctionRuleConfig;
}
