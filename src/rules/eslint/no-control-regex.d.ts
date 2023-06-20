import type { RuleConfig } from '../rule-config';

/**
 * Disallow control characters in regular expressions.
 *
 * @see [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)
 */
export type NoControlRegexRuleConfig = RuleConfig<[]>;

/**
 * Disallow control characters in regular expressions.
 *
 * @see [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)
 */
export interface NoControlRegexRule {
  /**
   * Disallow control characters in regular expressions.
   *
   * @see [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)
   */
  'no-control-regex': NoControlRegexRuleConfig;
}
