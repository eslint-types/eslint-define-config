import type { RuleConfig } from '../rule-config';

/**
 * Disallows returning any from a function.
 *
 * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
 */
export type NoUnsafeReturnRuleConfig = RuleConfig<[]>;

/**
 * Disallows returning any from a function.
 *
 * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
 */
export interface NoUnsafeReturnRule {
  /**
   * Disallows returning any from a function.
   *
   * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
   */
  '@typescript-eslint/no-unsafe-return': NoUnsafeReturnRuleConfig;
}
