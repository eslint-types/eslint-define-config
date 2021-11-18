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
 * @see [no-unused-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unused-expressions.md)
 */
export type NoUnusedExpressionsRuleConfig = RuleConfig<NoUnusedExpressionsOptions>;

/**
 * Disallow unused expressions.
 *
 * @see [no-unused-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unused-expressions.md)
 */
export interface NoUnusedExpressionsRule {
  /**
   * Disallow unused expressions.
   *
   * @see [no-unused-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unused-expressions.md)
   */
  '@typescript-eslint/no-unused-expressions': NoUnusedExpressionsRuleConfig;
}
