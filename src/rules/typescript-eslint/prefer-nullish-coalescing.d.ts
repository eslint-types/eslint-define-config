import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferNullishCoalescingOption {
  ignoreConditionalTests?: boolean;
  ignoreMixedLogicalExpressions?: boolean;
  forceSuggestionFixer?: boolean;
}

/**
 * Options.
 */
export type PreferNullishCoalescingOptions = [PreferNullishCoalescingOption?];

/**
 * Enforce the usage of the nullish coalescing operator instead of logical chaining.
 *
 * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
 */
export type PreferNullishCoalescingRuleConfig =
  RuleConfig<PreferNullishCoalescingOptions>;

/**
 * Enforce the usage of the nullish coalescing operator instead of logical chaining.
 *
 * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
 */
export interface PreferNullishCoalescingRule {
  /**
   * Enforce the usage of the nullish coalescing operator instead of logical chaining.
   *
   * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
   */
  '@typescript-eslint/prefer-nullish-coalescing': PreferNullishCoalescingRuleConfig;
}
