import type { RuleConfig } from '../rule-config';

/**
 * Disallows awaiting a value that is not a Thenable.
 *
 * @see [await-thenable](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/await-thenable.md)
 */
export type AwaitThenableRuleConfig = RuleConfig<[]>;

/**
 * Disallows awaiting a value that is not a Thenable.
 *
 * @see [await-thenable](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/await-thenable.md)
 */
export interface AwaitThenableRule {
  /**
   * Disallows awaiting a value that is not a Thenable.
   *
   * @see [await-thenable](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/await-thenable.md)
   */
  '@typescript-eslint/await-thenable': AwaitThenableRuleConfig;
}
