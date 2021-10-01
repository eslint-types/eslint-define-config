import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoConstructorReturnOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type NoConstructorReturnOptions = [NoConstructorReturnOption?];

/**
 * Disallow returning value from constructor.
 *
 * @see [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)
 */
export type NoConstructorReturnRuleConfig = RuleConfig<NoConstructorReturnOptions>;

/**
 * Disallow returning value from constructor.
 *
 * @see [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)
 */
export interface NoConstructorReturnRule {
  /**
   * Disallow returning value from constructor.
   *
   * @see [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)
   */
  'no-constructor-return': NoConstructorReturnRuleConfig;
}
