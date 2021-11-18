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
 * Requires using either `T[]` or `Array<T>` for arrays.
 *
 * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/array-type.md)
 */
export type ArrayTypeRuleConfig = RuleConfig<ArrayTypeOptions>;

/**
 * Requires using either `T[]` or `Array<T>` for arrays.
 *
 * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/array-type.md)
 */
export interface ArrayTypeRule {
  /**
   * Requires using either `T[]` or `Array<T>` for arrays.
   *
   * @see [array-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/array-type.md)
   */
  '@typescript-eslint/array-type': ArrayTypeRuleConfig;
}
