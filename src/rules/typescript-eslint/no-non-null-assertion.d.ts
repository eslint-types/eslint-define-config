import type { RuleConfig } from '../rule-config';

/**
 * Disallows non-null assertions using the `!` postfix operator.
 *
 * @see [no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
 */
export type NoNonNullAssertionRuleConfig = RuleConfig<[]>;

/**
 * Disallows non-null assertions using the `!` postfix operator.
 *
 * @see [no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
 */
export interface NoNonNullAssertionRule {
  /**
   * Disallows non-null assertions using the `!` postfix operator.
   *
   * @see [no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
   */
  '@typescript-eslint/no-non-null-assertion': NoNonNullAssertionRuleConfig;
}
