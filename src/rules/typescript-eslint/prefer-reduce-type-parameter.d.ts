import type { RuleConfig } from '../rule-config';

/**
 * Enforce using type parameter when calling `Array#reduce` instead of casting.
 *
 * @see [prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)
 */
export type PreferReduceTypeParameterRuleConfig = RuleConfig<[]>;

/**
 * Enforce using type parameter when calling `Array#reduce` instead of casting.
 *
 * @see [prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)
 */
export interface PreferReduceTypeParameterRule {
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of casting.
   *
   * @see [prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)
   */
  '@typescript-eslint/prefer-reduce-type-parameter': PreferReduceTypeParameterRuleConfig;
}
