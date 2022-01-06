import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoThrowLiteralOption {
  allowThrowingAny?: boolean;
  allowThrowingUnknown?: boolean;
}

/**
 * Options.
 */
export type NoThrowLiteralOptions = [NoThrowLiteralOption?];

/**
 * Disallow throwing literals as exceptions.
 *
 * @see [no-throw-literal](https://typescript-eslint.io/rules/no-throw-literal)
 */
export type NoThrowLiteralRuleConfig = RuleConfig<NoThrowLiteralOptions>;

/**
 * Disallow throwing literals as exceptions.
 *
 * @see [no-throw-literal](https://typescript-eslint.io/rules/no-throw-literal)
 */
export interface NoThrowLiteralRule {
  /**
   * Disallow throwing literals as exceptions.
   *
   * @see [no-throw-literal](https://typescript-eslint.io/rules/no-throw-literal)
   */
  '@typescript-eslint/no-throw-literal': NoThrowLiteralRuleConfig;
}
