import type { RuleConfig } from '../rule-config';

/**
 * Disallow calling a function with a value with type `any`.
 *
 * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
 */
export type NoUnsafeArgumentRuleConfig = RuleConfig<[]>;

/**
 * Disallow calling a function with a value with type `any`.
 *
 * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
 */
export interface NoUnsafeArgumentRule {
  /**
   * Disallow calling a function with a value with type `any`.
   *
   * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
   */
  '@typescript-eslint/no-unsafe-argument': NoUnsafeArgumentRuleConfig;
}
