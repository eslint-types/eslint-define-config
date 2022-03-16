import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new Array()`.
 *
 * @see [no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/rules/no-new-array.md)
 */
export type NoNewArrayRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new Array()`.
 *
 * @see [no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/rules/no-new-array.md)
 */
export interface NoNewArrayRule {
  /**
   * Disallow `new Array()`.
   *
   * @see [no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/rules/no-new-array.md)
   */
  'unicorn/no-new-array': NoNewArrayRuleConfig;
}
