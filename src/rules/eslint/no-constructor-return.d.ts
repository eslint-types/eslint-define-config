import type { RuleConfig } from '../rule-config';

/**
 * Options.
 */
export type NoConstructorReturnOptions = [];

/**
 * Disallow returning value from constructor.
 *
 * @see [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return)
 */
export type NoConstructorReturnRuleConfig =
  RuleConfig<NoConstructorReturnOptions>;

/**
 * Disallow returning value from constructor.
 *
 * @see [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return)
 */
export interface NoConstructorReturnRule {
  /**
   * Disallow returning value from constructor.
   *
   * @see [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return)
   */
  'no-constructor-return': NoConstructorReturnRuleConfig;
}
