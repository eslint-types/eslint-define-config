import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface GetterReturnOption {
  allowImplicit?: boolean;
}

/**
 * Options.
 */
export type GetterReturnOptions = [GetterReturnOption?];

/**
 * Enforce `return` statements in getters.
 *
 * @see [getter-return](https://eslint.org/docs/latest/rules/getter-return)
 */
export type GetterReturnRuleConfig = RuleConfig<GetterReturnOptions>;

/**
 * Enforce `return` statements in getters.
 *
 * @see [getter-return](https://eslint.org/docs/latest/rules/getter-return)
 */
export interface GetterReturnRule {
  /**
   * Enforce `return` statements in getters.
   *
   * @see [getter-return](https://eslint.org/docs/latest/rules/getter-return)
   */
  'getter-return': GetterReturnRuleConfig;
}
