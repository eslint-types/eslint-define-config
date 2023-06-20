import type { RuleConfig } from '../rule-config';

/**
 * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
 *
 * @see [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)
 */
export type NoUnreachableRuleConfig = RuleConfig<[]>;

/**
 * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
 *
 * @see [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)
 */
export interface NoUnreachableRule {
  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
   *
   * @see [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)
   */
  'no-unreachable': NoUnreachableRuleConfig;
}
