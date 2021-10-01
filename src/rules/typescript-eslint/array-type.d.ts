import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ArrayTypeOption {
  /**
   * Sets the array type expected for mutable cases.
   *
   * @default 'array'
   *
   * @see [default](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md#options)
   */
  default?: 'array' | 'generic' | 'array-simple';
  /**
   * Sets the array type expected for readonly arrays. If this is omitted, then the value for default will be used.
   *
   * @see [readonly](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md#options)
   */
  readonly?: 'array' | 'generic' | 'array-simple';
  [k: string]: any;
}

/**
 * Options.
 */
export type ArrayTypeOptions = [ArrayTypeOption?];

/**
 * Requires using either `T[]` or `Array<T>` for arrays.
 *
 * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/array-type.md)
 */
export type ArrayTypeRuleConfig = RuleConfig<ArrayTypeOptions>;

/**
 * Requires using either `T[]` or `Array<T>` for arrays.
 *
 * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/array-type.md)
 */
export interface ArrayTypeRule {
  /**
   * Requires using either `T[]` or `Array<T>` for arrays.
   *
   * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/array-type.md)
   */
  '@typescript-eslint/array-type': ArrayTypeRuleConfig;
}
