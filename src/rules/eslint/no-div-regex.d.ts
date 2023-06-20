import type { RuleConfig } from '../rule-config';

/**
 * Disallow equal signs explicitly at the beginning of regular expressions.
 *
 * @see [no-div-regex](https://eslint.org/docs/latest/rules/no-div-regex)
 */
export type NoDivRegexRuleConfig = RuleConfig<[]>;

/**
 * Disallow equal signs explicitly at the beginning of regular expressions.
 *
 * @see [no-div-regex](https://eslint.org/docs/latest/rules/no-div-regex)
 */
export interface NoDivRegexRule {
  /**
   * Disallow equal signs explicitly at the beginning of regular expressions.
   *
   * @see [no-div-regex](https://eslint.org/docs/latest/rules/no-div-regex)
   */
  'no-div-regex': NoDivRegexRuleConfig;
}
