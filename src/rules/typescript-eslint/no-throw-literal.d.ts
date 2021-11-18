import type { RuleConfig } from '../rule-config';

/**
 * Disallow throwing literals as exceptions.
 *
 * @see [no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-throw-literal.md)
 */
export type NoThrowLiteralRuleConfig = RuleConfig<[]>;

/**
 * Disallow throwing literals as exceptions.
 *
 * @see [no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-throw-literal.md)
 */
export interface NoThrowLiteralRule {
  /**
   * Disallow throwing literals as exceptions.
   *
   * @see [no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-throw-literal.md)
   */
  '@typescript-eslint/no-throw-literal': NoThrowLiteralRuleConfig;
}
