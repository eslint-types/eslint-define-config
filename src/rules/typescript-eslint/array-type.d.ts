import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ArrayTypeOption {
  default?: 'array' | 'generic' | 'array-simple';
  readonly?: 'array' | 'generic' | 'array-simple';
  [k: string]: any;
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
