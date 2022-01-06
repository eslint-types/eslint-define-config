import type { RuleConfig } from '../rule-config';

/**
 * Disallows awaiting a value that is not a Thenable.
 *
 * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
 */
export type AwaitThenableRuleConfig = RuleConfig<[]>;

/**
 * Disallows awaiting a value that is not a Thenable.
 *
 * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
 */
export interface AwaitThenableRule {
  /**
   * Disallows awaiting a value that is not a Thenable.
   *
   * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
   */
  '@typescript-eslint/await-thenable': AwaitThenableRuleConfig;
}
