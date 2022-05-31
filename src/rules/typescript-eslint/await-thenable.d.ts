import type { RuleConfig } from '../rule-config';

/**
 * Disallow awaiting a value that is not a Thenable.
 *
 * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
 */
export type AwaitThenableRuleConfig = RuleConfig<[]>;

/**
 * Disallow awaiting a value that is not a Thenable.
 *
 * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
 */
export interface AwaitThenableRule {
  /**
   * Disallow awaiting a value that is not a Thenable.
   *
   * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
   */
  '@typescript-eslint/await-thenable': AwaitThenableRuleConfig;
}
