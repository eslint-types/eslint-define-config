import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [no-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#no-reduce)
 */
export type NoReduceRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [no-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#no-reduce)
 */
export interface NoReduceRule {
  /**
   *
   * @deprecated
   *
   * @see [no-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#no-reduce)
   */
  'unicorn/no-reduce': NoReduceRuleConfig;
}
