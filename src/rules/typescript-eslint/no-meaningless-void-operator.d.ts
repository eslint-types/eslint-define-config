import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMeaninglessVoidOperatorOption {
  checkNever?: boolean;
}

/**
 * Options.
 */
export type NoMeaninglessVoidOperatorOptions = [
  NoMeaninglessVoidOperatorOption?,
];

/**
 * Disallow the `void` operator except when used to discard a value.
 *
 * @see [no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator)
 */
export type NoMeaninglessVoidOperatorRuleConfig =
  RuleConfig<NoMeaninglessVoidOperatorOptions>;

/**
 * Disallow the `void` operator except when used to discard a value.
 *
 * @see [no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator)
 */
export interface NoMeaninglessVoidOperatorRule {
  /**
   * Disallow the `void` operator except when used to discard a value.
   *
   * @see [no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator)
   */
  '@typescript-eslint/no-meaningless-void-operator': NoMeaninglessVoidOperatorRuleConfig;
}
