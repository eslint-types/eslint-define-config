import type { RuleConfig } from '../rule-config';

/**
 * Disallow multiple spaces in regular expressions.
 *
 * @see [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces)
 */
export type NoRegexSpacesRuleConfig = RuleConfig<[]>;

/**
 * Disallow multiple spaces in regular expressions.
 *
 * @see [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces)
 */
export interface NoRegexSpacesRule {
  /**
   * Disallow multiple spaces in regular expressions.
   *
   * @see [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces)
   */
  'no-regex-spaces': NoRegexSpacesRuleConfig;
}
