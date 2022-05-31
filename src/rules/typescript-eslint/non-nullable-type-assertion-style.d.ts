import type { RuleConfig } from '../rule-config';

/**
 * Enforce non-null assertions over explicit type casts.
 *
 * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
 */
export type NonNullableTypeAssertionStyleRuleConfig = RuleConfig<[]>;

/**
 * Enforce non-null assertions over explicit type casts.
 *
 * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
 */
export interface NonNullableTypeAssertionStyleRule {
  /**
   * Enforce non-null assertions over explicit type casts.
   *
   * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
   */
  '@typescript-eslint/non-nullable-type-assertion-style': NonNullableTypeAssertionStyleRuleConfig;
}
