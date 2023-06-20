import type { RuleConfig } from '../rule-config';

/**
 * Require parenthesis around regex literals.
 *
 * @see [wrap-regex](https://eslint.org/docs/latest/rules/wrap-regex)
 */
export type WrapRegexRuleConfig = RuleConfig<[]>;

/**
 * Require parenthesis around regex literals.
 *
 * @see [wrap-regex](https://eslint.org/docs/latest/rules/wrap-regex)
 */
export interface WrapRegexRule {
  /**
   * Require parenthesis around regex literals.
   *
   * @see [wrap-regex](https://eslint.org/docs/latest/rules/wrap-regex)
   */
  'wrap-regex': WrapRegexRuleConfig;
}
