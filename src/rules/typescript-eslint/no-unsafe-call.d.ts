import type { RuleConfig } from '../rule-config';

/**
 * Disallow calling a value with type `any`.
 *
 * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
 */
export type NoUnsafeCallRuleConfig = RuleConfig<[]>;

/**
 * Disallow calling a value with type `any`.
 *
 * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
 */
export interface NoUnsafeCallRule {
  /**
   * Disallow calling a value with type `any`.
   *
   * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
   */
  '@typescript-eslint/no-unsafe-call': NoUnsafeCallRuleConfig;
}
