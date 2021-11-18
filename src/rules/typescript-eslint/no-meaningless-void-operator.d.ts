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
export type NoMeaninglessVoidOperatorOptions = [NoMeaninglessVoidOperatorOption?];

/**
 * Disallow the `void` operator except when used to discard a value.
 *
 * @see [no-meaningless-void-operator](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md)
 */
export type NoMeaninglessVoidOperatorRuleConfig = RuleConfig<NoMeaninglessVoidOperatorOptions>;

/**
 * Disallow the `void` operator except when used to discard a value.
 *
 * @see [no-meaningless-void-operator](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md)
 */
export interface NoMeaninglessVoidOperatorRule {
  /**
   * Disallow the `void` operator except when used to discard a value.
   *
   * @see [no-meaningless-void-operator](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md)
   */
  '@typescript-eslint/no-meaningless-void-operator': NoMeaninglessVoidOperatorRuleConfig;
}
