import type { RuleConfig } from '../rule-config';

/**
 * Disallow unsafe regular expressions.
 *
 * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unsafe-regex.md)
 */
export type NoUnsafeRegexRuleConfig = RuleConfig<[]>;

/**
 * Disallow unsafe regular expressions.
 *
 * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unsafe-regex.md)
 */
export interface NoUnsafeRegexRule {
  /**
   * Disallow unsafe regular expressions.
   *
   * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unsafe-regex.md)
   */
  'unicorn/no-unsafe-regex': NoUnsafeRegexRuleConfig;
}
