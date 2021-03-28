import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PreferNullishCoalescingOption = {
  /**
   * Setting this option to `true` (the default) will cause the rule to ignore any cases that are located within a conditional test.
   *
   * @default true
   *
   * @see [ignoreConditionalTests](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md#ignoreconditionaltests)
   */
  ignoreConditionalTests?: boolean;
  /**
   * Setting this option to `true` (the default) will cause the rule to ignore any logical or expressions that are part of a mixed logical expression (with `&&`).
   *
   * @default true
   *
   * @see [ignoreMixedLogicalExpressions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md#ignoremixedlogicalexpressions)
   */
  ignoreMixedLogicalExpressions?: boolean;
};

/**
 * Options.
 */
export type PreferNullishCoalescingOptions = [PreferNullishCoalescingOption?];

/**
 * Enforce the usage of the nullish coalescing operator instead of logical chaining.
 *
 * @see [prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)
 */
export type PreferNullishCoalescingRuleConfig = RuleConfig<PreferNullishCoalescingOptions>;

/**
 * Enforce the usage of the nullish coalescing operator instead of logical chaining.
 *
 * @see [prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)
 */
export interface PreferNullishCoalescingRule {
  /**
   * Enforce the usage of the nullish coalescing operator instead of logical chaining.
   *
   * @see [prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)
   */
  '@typescript-eslint/prefer-nullish-coalescing': PreferNullishCoalescingRuleConfig;
}
