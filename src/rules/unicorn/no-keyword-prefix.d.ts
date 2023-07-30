import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoKeywordPrefixOption {
  /**
   * @minItems 0
   */
  disallowedPrefixes?: [] | [string];
  checkProperties?: boolean;
  onlyCamelCase?: boolean;
}

/**
 * Options.
 */
export type NoKeywordPrefixOptions = [NoKeywordPrefixOption?];

/**
 * Disallow identifiers starting with `new` or `class`.
 *
 * @see [no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-keyword-prefix.md)
 */
export type NoKeywordPrefixRuleConfig = RuleConfig<NoKeywordPrefixOptions>;

/**
 * Disallow identifiers starting with `new` or `class`.
 *
 * @see [no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-keyword-prefix.md)
 */
export interface NoKeywordPrefixRule {
  /**
   * Disallow identifiers starting with `new` or `class`.
   *
   * @see [no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-keyword-prefix.md)
   */
  'unicorn/no-keyword-prefix': NoKeywordPrefixRuleConfig;
}
