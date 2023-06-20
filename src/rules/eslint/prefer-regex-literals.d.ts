import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferRegexLiteralsOption {
  disallowRedundantWrapping?: boolean;
}

/**
 * Options.
 */
export type PreferRegexLiteralsOptions = [PreferRegexLiteralsOption?];

/**
 * Disallow use of the `RegExp` constructor in favor of regular expression literals.
 *
 * @see [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)
 */
export type PreferRegexLiteralsRuleConfig =
  RuleConfig<PreferRegexLiteralsOptions>;

/**
 * Disallow use of the `RegExp` constructor in favor of regular expression literals.
 *
 * @see [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)
 */
export interface PreferRegexLiteralsRule {
  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals.
   *
   * @see [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)
   */
  'prefer-regex-literals': PreferRegexLiteralsRuleConfig;
}
