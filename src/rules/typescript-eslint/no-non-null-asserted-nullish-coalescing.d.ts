import type { RuleConfig } from '../rule-config';

/**
 * Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
 *
 * @see [no-non-null-asserted-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md)
 */
export type NoNonNullAssertedNullishCoalescingRuleConfig = RuleConfig<[]>;

/**
 * Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
 *
 * @see [no-non-null-asserted-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md)
 */
export interface NoNonNullAssertedNullishCoalescingRule {
  /**
   * Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
   *
   * @see [no-non-null-asserted-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md)
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': NoNonNullAssertedNullishCoalescingRuleConfig;
}
