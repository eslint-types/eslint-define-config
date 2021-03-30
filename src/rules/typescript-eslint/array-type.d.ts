import type { RuleConfig } from '../rule-config';

/**
 * Array Option.
 */
export type ArrayOption = 'array' | 'generic' | 'array-simple';

/**
 * Option.
 */
export type ArrayTypeOption = {
  /**
   * Sets the array type expected for mutable cases.
   *
   * @default 'array'
   *
   * @see [default](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md#options)
   */
  default: ArrayOption;
  /**
   * Sets the array type expected for readonly arrays. If this is omitted, then the value for default will be used.
   *
   * @see [readonly](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md#options)
   */
  readonly?: ArrayOption;
};

/**
 * Options.
 */
export type ArrayTypeOptions = [ArrayTypeOption?];

/**
 * Requires using either `T[]` or `Array<T>` for arrays.
 *
 * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md)
 */
export type ArrayTypeRuleConfig = RuleConfig<ArrayTypeOptions>;

/**
 * Requires using either `T[]` or `Array<T>` for arrays.
 *
 * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md)
 */
export interface ArrayTypeRule {
  /**
   * Requires using either `T[]` or `Array<T>` for arrays.
   *
   * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md)
   */
  '@typescript-eslint/array-type': ArrayTypeRuleConfig;
}
