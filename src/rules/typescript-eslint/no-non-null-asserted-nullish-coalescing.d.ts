import type { RuleConfig } from '../rule-config';

/**
 * Disallow non-null assertions in the left operand of a nullish coalescing operator.
 *
 * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
 */
export type NoNonNullAssertedNullishCoalescingRuleConfig = RuleConfig<[]>;

/**
 * Disallow non-null assertions in the left operand of a nullish coalescing operator.
 *
 * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
 */
export interface NoNonNullAssertedNullishCoalescingRule {
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator.
   *
   * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': NoNonNullAssertedNullishCoalescingRuleConfig;
}
