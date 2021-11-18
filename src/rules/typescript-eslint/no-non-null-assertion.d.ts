import type { RuleConfig } from '../rule-config';

/**
 * Disallows non-null assertions using the `!` postfix operator.
 *
 * @see [no-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-assertion.md)
 */
export type NoNonNullAssertionRuleConfig = RuleConfig<[]>;

/**
 * Disallows non-null assertions using the `!` postfix operator.
 *
 * @see [no-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-assertion.md)
 */
export interface NoNonNullAssertionRule {
  /**
   * Disallows non-null assertions using the `!` postfix operator.
   *
   * @see [no-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-assertion.md)
   */
  '@typescript-eslint/no-non-null-assertion': NoNonNullAssertionRuleConfig;
}
