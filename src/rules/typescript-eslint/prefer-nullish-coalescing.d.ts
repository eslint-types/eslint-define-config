import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferNullishCoalescingOption {
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
  ignoreConditionalTests?: boolean;
  ignoreMixedLogicalExpressions?: boolean;
  ignorePrimitives?:
    | {
        bigint?: boolean;
        boolean?: boolean;
        number?: boolean;
        string?: boolean;
        [k: string]: any;
      }
    | true;
  ignoreTernaryTests?: boolean;
}

/**
 * Options.
 */
export type PreferNullishCoalescingOptions = [PreferNullishCoalescingOption?];

/**
 * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
 *
 * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
 */
export type PreferNullishCoalescingRuleConfig =
  RuleConfig<PreferNullishCoalescingOptions>;

/**
 * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
 *
 * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
 */
export interface PreferNullishCoalescingRule {
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
   *
   * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
   */
  '@typescript-eslint/prefer-nullish-coalescing': PreferNullishCoalescingRuleConfig;
}
