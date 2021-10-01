import type { RuleConfig } from '../rule-config';

/**
 * Disallow division operators explicitly at the beginning of regular expressions.
 *
 * @see [no-div-regex](https://eslint.org/docs/rules/no-div-regex)
 */
export type NoDivRegexRuleConfig = RuleConfig<[]>;

/**
 * Disallow division operators explicitly at the beginning of regular expressions.
 *
 * @see [no-div-regex](https://eslint.org/docs/rules/no-div-regex)
 */
export interface NoDivRegexRule {
  /**
   * Disallow division operators explicitly at the beginning of regular expressions.
   *
   * @see [no-div-regex](https://eslint.org/docs/rules/no-div-regex)
   */
  'no-div-regex': NoDivRegexRuleConfig;
}
