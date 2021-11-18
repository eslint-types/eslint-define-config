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
 * @see [prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)
 */
export type PreferNullishCoalescingRuleConfig = RuleConfig<PreferNullishCoalescingOptions>;

/**
 * Enforce the usage of the nullish coalescing operator instead of logical chaining.
 *
 * @see [prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)
 */
export interface PreferNullishCoalescingRule {
  /**
   * Enforce the usage of the nullish coalescing operator instead of logical chaining.
   *
   * @see [prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)
   */
  '@typescript-eslint/prefer-nullish-coalescing': PreferNullishCoalescingRuleConfig;
}
