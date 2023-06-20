import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `undefined` as an identifier.
 *
 * @see [no-undefined](https://eslint.org/docs/latest/rules/no-undefined)
 */
export type NoUndefinedRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `undefined` as an identifier.
 *
 * @see [no-undefined](https://eslint.org/docs/latest/rules/no-undefined)
 */
export interface NoUndefinedRule {
  /**
   * Disallow the use of `undefined` as an identifier.
   *
   * @see [no-undefined](https://eslint.org/docs/latest/rules/no-undefined)
   */
  'no-undefined': NoUndefinedRuleConfig;
}
