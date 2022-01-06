import type { RuleConfig } from '../rule-config';

/**
 * Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
 *
 * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
 */
export type NoNonNullAssertedNullishCoalescingRuleConfig = RuleConfig<[]>;

/**
 * Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
 *
 * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
 */
export interface NoNonNullAssertedNullishCoalescingRule {
  /**
   * Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
   *
   * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': NoNonNullAssertedNullishCoalescingRuleConfig;
}
