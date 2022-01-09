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
export type NoUnnecessaryBooleanLiteralCompareOptions = [
  NoUnnecessaryBooleanLiteralCompareOption?,
];

/**
 * Flags unnecessary equality comparisons against boolean literals.
 *
 * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
 */
export type NoUnnecessaryBooleanLiteralCompareRuleConfig =
  RuleConfig<NoUnnecessaryBooleanLiteralCompareOptions>;

/**
 * Flags unnecessary equality comparisons against boolean literals.
 *
 * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
 */
export interface NoUnnecessaryBooleanLiteralCompareRule {
  /**
   * Flags unnecessary equality comparisons against boolean literals.
   *
   * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': NoUnnecessaryBooleanLiteralCompareRuleConfig;
}
