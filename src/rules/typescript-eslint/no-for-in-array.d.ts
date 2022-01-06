import type { RuleConfig } from '../rule-config';

/**
 * Disallow iterating over an array with a for-in loop.
 *
 * @see [no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array)
 */
export type NoForInArrayRuleConfig = RuleConfig<[]>;

/**
 * Disallow iterating over an array with a for-in loop.
 *
 * @see [no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array)
 */
export interface NoForInArrayRule {
  /**
   * Disallow iterating over an array with a for-in loop.
   *
   * @see [no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array)
   */
  '@typescript-eslint/no-for-in-array': NoForInArrayRuleConfig;
}
