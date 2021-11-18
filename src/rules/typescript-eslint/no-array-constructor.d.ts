import type { RuleConfig } from '../rule-config';

/**
 * Disallow generic `Array` constructors.
 *
 * @see [no-array-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-array-constructor.md)
 */
export type NoArrayConstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow generic `Array` constructors.
 *
 * @see [no-array-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-array-constructor.md)
 */
export interface NoArrayConstructorRule {
  /**
   * Disallow generic `Array` constructors.
   *
   * @see [no-array-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-array-constructor.md)
   */
  '@typescript-eslint/no-array-constructor': NoArrayConstructorRuleConfig;
}
