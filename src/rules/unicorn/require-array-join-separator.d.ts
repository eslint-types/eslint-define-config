import type { RuleConfig } from '../rule-config';

/**
 * Enforce using the separator argument with `Array#join()`.
 *
 * @see [require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-array-join-separator.md)
 */
export type RequireArrayJoinSeparatorRuleConfig = RuleConfig<[]>;

/**
 * Enforce using the separator argument with `Array#join()`.
 *
 * @see [require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-array-join-separator.md)
 */
export interface RequireArrayJoinSeparatorRule {
  /**
   * Enforce using the separator argument with `Array#join()`.
   *
   * @see [require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-array-join-separator.md)
   */
  'unicorn/require-array-join-separator': RequireArrayJoinSeparatorRuleConfig;
}
