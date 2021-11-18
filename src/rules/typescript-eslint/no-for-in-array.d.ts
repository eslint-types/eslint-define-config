import type { RuleConfig } from '../rule-config';

/**
 * Disallow iterating over an array with a for-in loop.
 *
 * @see [no-for-in-array](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-for-in-array.md)
 */
export type NoForInArrayRuleConfig = RuleConfig<[]>;

/**
 * Disallow iterating over an array with a for-in loop.
 *
 * @see [no-for-in-array](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-for-in-array.md)
 */
export interface NoForInArrayRule {
  /**
   * Disallow iterating over an array with a for-in loop.
   *
   * @see [no-for-in-array](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-for-in-array.md)
   */
  '@typescript-eslint/no-for-in-array': NoForInArrayRuleConfig;
}
