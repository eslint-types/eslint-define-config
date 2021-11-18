import type { RuleConfig } from '../rule-config';

/**
 * Prefer using type parameter when calling `Array#reduce` instead of casting.
 *
 * @see [prefer-reduce-type-parameter](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)
 */
export type PreferReduceTypeParameterRuleConfig = RuleConfig<[]>;

/**
 * Prefer using type parameter when calling `Array#reduce` instead of casting.
 *
 * @see [prefer-reduce-type-parameter](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)
 */
export interface PreferReduceTypeParameterRule {
  /**
   * Prefer using type parameter when calling `Array#reduce` instead of casting.
   *
   * @see [prefer-reduce-type-parameter](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)
   */
  '@typescript-eslint/prefer-reduce-type-parameter': PreferReduceTypeParameterRuleConfig;
}
