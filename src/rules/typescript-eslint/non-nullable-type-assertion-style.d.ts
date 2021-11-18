import type { RuleConfig } from '../rule-config';

/**
 * Prefers a non-null assertion over explicit type cast when possible.
 *
 * @see [non-nullable-type-assertion-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md)
 */
export type NonNullableTypeAssertionStyleRuleConfig = RuleConfig<[]>;

/**
 * Prefers a non-null assertion over explicit type cast when possible.
 *
 * @see [non-nullable-type-assertion-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md)
 */
export interface NonNullableTypeAssertionStyleRule {
  /**
   * Prefers a non-null assertion over explicit type cast when possible.
   *
   * @see [non-nullable-type-assertion-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md)
   */
  '@typescript-eslint/non-nullable-type-assertion-style': NonNullableTypeAssertionStyleRuleConfig;
}
