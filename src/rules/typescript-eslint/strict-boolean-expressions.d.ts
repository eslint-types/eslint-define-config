import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface StrictBooleanExpressionsOption {
  allowString?: boolean;
  allowNumber?: boolean;
  allowNullableObject?: boolean;
  allowNullableBoolean?: boolean;
  allowNullableString?: boolean;
  allowNullableNumber?: boolean;
  allowNullableEnum?: boolean;
  allowAny?: boolean;
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
}

/**
 * Options.
 */
export type StrictBooleanExpressionsOptions = [StrictBooleanExpressionsOption?];

/**
 * Disallow certain types in boolean expressions.
 *
 * @see [strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)
 */
export type StrictBooleanExpressionsRuleConfig =
  RuleConfig<StrictBooleanExpressionsOptions>;

/**
 * Disallow certain types in boolean expressions.
 *
 * @see [strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)
 */
export interface StrictBooleanExpressionsRule {
  /**
   * Disallow certain types in boolean expressions.
   *
   * @see [strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)
   */
  '@typescript-eslint/strict-boolean-expressions': StrictBooleanExpressionsRuleConfig;
}
