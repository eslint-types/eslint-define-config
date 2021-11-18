import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnnecessaryBooleanLiteralCompareOption {
  allowComparingNullableBooleansToTrue?: boolean;
  allowComparingNullableBooleansToFalse?: boolean;
}

/**
 * Options.
 */
export type NoUnnecessaryBooleanLiteralCompareOptions = [NoUnnecessaryBooleanLiteralCompareOption?];

/**
 * Flags unnecessary equality comparisons against boolean literals.
 *
 * @see [no-unnecessary-boolean-literal-compare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md)
 */
export type NoUnnecessaryBooleanLiteralCompareRuleConfig = RuleConfig<NoUnnecessaryBooleanLiteralCompareOptions>;

/**
 * Flags unnecessary equality comparisons against boolean literals.
 *
 * @see [no-unnecessary-boolean-literal-compare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md)
 */
export interface NoUnnecessaryBooleanLiteralCompareRule {
  /**
   * Flags unnecessary equality comparisons against boolean literals.
   *
   * @see [no-unnecessary-boolean-literal-compare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md)
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': NoUnnecessaryBooleanLiteralCompareRuleConfig;
}
