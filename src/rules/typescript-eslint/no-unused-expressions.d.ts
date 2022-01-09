import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnusedExpressionsOption {
  allowShortCircuit?: boolean;
  allowTernary?: boolean;
  allowTaggedTemplates?: boolean;
  enforceForJSX?: boolean;
}

/**
 * Options.
 */
export type NoUnusedExpressionsOptions = [NoUnusedExpressionsOption?];

/**
 * Disallow unused expressions.
 *
 * @see [no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)
 */
export type NoUnusedExpressionsRuleConfig =
  RuleConfig<NoUnusedExpressionsOptions>;

/**
 * Disallow unused expressions.
 *
 * @see [no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)
 */
export interface NoUnusedExpressionsRule {
  /**
   * Disallow unused expressions.
   *
   * @see [no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)
   */
  '@typescript-eslint/no-unused-expressions': NoUnusedExpressionsRuleConfig;
}
