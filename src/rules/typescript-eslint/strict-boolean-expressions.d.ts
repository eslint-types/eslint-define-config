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
  allowAny?: boolean;
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
}

/**
 * Options.
 */
export type StrictBooleanExpressionsOptions = [StrictBooleanExpressionsOption?];

/**
 * Restricts the types allowed in boolean expressions.
 *
 * @see [strict-boolean-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md)
 */
export type StrictBooleanExpressionsRuleConfig = RuleConfig<StrictBooleanExpressionsOptions>;

/**
 * Restricts the types allowed in boolean expressions.
 *
 * @see [strict-boolean-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md)
 */
export interface StrictBooleanExpressionsRule {
  /**
   * Restricts the types allowed in boolean expressions.
   *
   * @see [strict-boolean-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md)
   */
  '@typescript-eslint/strict-boolean-expressions': StrictBooleanExpressionsRuleConfig;
}
