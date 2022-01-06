import type { RuleConfig } from '../rule-config';

/**
 * Prefers a non-null assertion over explicit type cast when possible.
 *
 * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
 */
export type NonNullableTypeAssertionStyleRuleConfig = RuleConfig<[]>;

/**
 * Prefers a non-null assertion over explicit type cast when possible.
 *
 * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
 */
export interface NonNullableTypeAssertionStyleRule {
  /**
   * Prefers a non-null assertion over explicit type cast when possible.
   *
   * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
   */
  '@typescript-eslint/non-nullable-type-assertion-style': NonNullableTypeAssertionStyleRuleConfig;
}
