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
 * @see [no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/no-throw-literal.md)
 */
export type NoThrowLiteralRuleConfig = RuleConfig<NoThrowLiteralOptions>;

/**
 * Disallow throwing literals as exceptions.
 *
 * @see [no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/no-throw-literal.md)
 */
export interface NoThrowLiteralRule {
  /**
   * Disallow throwing literals as exceptions.
   *
   * @see [no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/no-throw-literal.md)
   */
  '@typescript-eslint/no-throw-literal': NoThrowLiteralRuleConfig;
}
