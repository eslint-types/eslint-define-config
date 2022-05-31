import type { RuleConfig } from '../rule-config';

/**
 * Disallow returning a value with type `any` from a function.
 *
 * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
 */
export type NoUnsafeReturnRuleConfig = RuleConfig<[]>;

/**
 * Disallow returning a value with type `any` from a function.
 *
 * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
 */
export interface NoUnsafeReturnRule {
  /**
   * Disallow returning a value with type `any` from a function.
   *
   * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
   */
  '@typescript-eslint/no-unsafe-return': NoUnsafeReturnRuleConfig;
}
