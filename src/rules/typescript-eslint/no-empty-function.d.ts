import { AllowOptionEntries } from '../eslint/no-empty-function';
import type { RuleConfig } from '../rule-config';

/** Additional Allow Option Entries. */
export type AdditionalAllowOptionEntries =
  | AllowOptionEntries
  | 'private-constructors'
  | 'protected-constructors'
  | 'decoratedFunctions';

/**
 * Option.
 */
export type NoEmptyFunctionOption = {
  /**
   * Allow specific kinds of functions to be empty.
   *
   * @default []
   *
   * @see [allow](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md#options)
   */
  allow?: AdditionalAllowOptionEntries[];
};

/**
 * Options.
 */
export type NoEmptyFunctionOptions = [NoEmptyFunctionOption?];

/**
 * Disallow empty functions.
 *
 * @see [no-empty-function](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md)
 */
export type NoEmptyFunctionRuleConfig = RuleConfig<NoEmptyFunctionOptions>;

/**
 * Disallow empty functions.
 *
 * @see [no-empty-function](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md)
 */
export interface NoEmptyFunctionRule {
  /**
   * Disallow empty functions.
   *
   * @see [no-empty-function](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md)
   */
  '@typescript-eslint/no-empty-function': NoEmptyFunctionRuleConfig;
}
