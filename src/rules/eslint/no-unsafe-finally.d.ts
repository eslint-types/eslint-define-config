import type { RuleConfig } from '../rule-config';

/**
 * Disallow control flow statements in `finally` blocks.
 *
 * @see [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)
 */
export type NoUnsafeFinallyRuleConfig = RuleConfig<[]>;

/**
 * Disallow control flow statements in `finally` blocks.
 *
 * @see [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)
 */
export interface NoUnsafeFinallyRule {
  /**
   * Disallow control flow statements in `finally` blocks.
   *
   * @see [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)
   */
  'no-unsafe-finally': NoUnsafeFinallyRuleConfig;
}
