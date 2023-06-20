import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface IdMatchConfig {
  properties?: boolean;
  classFields?: boolean;
  onlyDeclarations?: boolean;
  ignoreDestructuring?: boolean;
}

/**
 * Option.
 */
export type IdMatchOption = string;

/**
 * Options.
 */
export type IdMatchOptions = [IdMatchOption?, IdMatchConfig?];

/**
 * Require identifiers to match a specified regular expression.
 *
 * @see [id-match](https://eslint.org/docs/latest/rules/id-match)
 */
export type IdMatchRuleConfig = RuleConfig<IdMatchOptions>;

/**
 * Require identifiers to match a specified regular expression.
 *
 * @see [id-match](https://eslint.org/docs/latest/rules/id-match)
 */
export interface IdMatchRule {
  /**
   * Require identifiers to match a specified regular expression.
   *
   * @see [id-match](https://eslint.org/docs/latest/rules/id-match)
   */
  'id-match': IdMatchRuleConfig;
}
