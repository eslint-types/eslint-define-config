import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnnecessaryBooleanLiteralCompareOption {
  /**
   * Whether to allow comparisons between nullable boolean variables and `true`.
   */
  allowComparingNullableBooleansToTrue?: boolean;
  /**
   * Whether to allow comparisons between nullable boolean variables and `false`.
   */
  allowComparingNullableBooleansToFalse?: boolean;
}

/**
 * Options.
 */
export type NoUnnecessaryBooleanLiteralCompareOptions = [
  NoUnnecessaryBooleanLiteralCompareOption?,
];

/**
 * Disallow unnecessary equality comparisons against boolean literals.
 *
 * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
 */
export type NoUnnecessaryBooleanLiteralCompareRuleConfig =
  RuleConfig<NoUnnecessaryBooleanLiteralCompareOptions>;

/**
 * Disallow unnecessary equality comparisons against boolean literals.
 *
 * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
 */
export interface NoUnnecessaryBooleanLiteralCompareRule {
  /**
   * Disallow unnecessary equality comparisons against boolean literals.
   *
   * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': NoUnnecessaryBooleanLiteralCompareRuleConfig;
}
