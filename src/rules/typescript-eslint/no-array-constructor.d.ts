import type { RuleConfig } from '../rule-config';

/**
 * Disallow generic `Array` constructors.
 *
 * @see [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)
 */
export type NoArrayConstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow generic `Array` constructors.
 *
 * @see [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)
 */
export interface NoArrayConstructorRule {
  /**
   * Disallow generic `Array` constructors.
   *
   * @see [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)
   */
  '@typescript-eslint/no-array-constructor': NoArrayConstructorRuleConfig;
}
