import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ArrayTypeOption {
  /**
   * The array type expected for mutable cases.
   */
  default?: 'array' | 'generic' | 'array-simple';
  /**
   * The array type expected for readonly cases. If omitted, the value for `default` will be used.
   */
  readonly?: 'array' | 'generic' | 'array-simple';
}

/**
 * Options.
 */
export type ArrayTypeOptions = [ArrayTypeOption?];

/**
 * Require consistently using either `T[]` or `Array<T>` for arrays.
 *
 * @see [array-type](https://typescript-eslint.io/rules/array-type)
 */
export type ArrayTypeRuleConfig = RuleConfig<ArrayTypeOptions>;

/**
 * Require consistently using either `T[]` or `Array<T>` for arrays.
 *
 * @see [array-type](https://typescript-eslint.io/rules/array-type)
 */
export interface ArrayTypeRule {
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays.
   *
   * @see [array-type](https://typescript-eslint.io/rules/array-type)
   */
  '@typescript-eslint/array-type': ArrayTypeRuleConfig;
}
