import type { RuleConfig } from '../rule-config';

/**
 * Do not use a `for` loop that can be replaced with a `for-of` loop.
 *
 * @see [no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-for-loop.md)
 */
export type NoForLoopRuleConfig = RuleConfig<[]>;

/**
 * Do not use a `for` loop that can be replaced with a `for-of` loop.
 *
 * @see [no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-for-loop.md)
 */
export interface NoForLoopRule {
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   *
   * @see [no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-for-loop.md)
   */
  'unicorn/no-for-loop': NoForLoopRuleConfig;
}
