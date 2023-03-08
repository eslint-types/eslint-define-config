import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#regex-shorthand)
 */
export type RegexShorthandRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#regex-shorthand)
 */
export interface RegexShorthandRule {
  /**
   *
   * @deprecated
   *
   * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#regex-shorthand)
   */
  'unicorn/regex-shorthand': RegexShorthandRuleConfig;
}
