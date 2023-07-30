import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#regex-shorthand)
 */
export type RegexShorthandRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#regex-shorthand)
 */
export interface RegexShorthandRule {
  /**
   *
   * @deprecated
   *
   * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#regex-shorthand)
   */
  'unicorn/regex-shorthand': RegexShorthandRuleConfig;
}
