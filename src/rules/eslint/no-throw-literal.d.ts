import type { RuleConfig } from '../rule-config';

/**
 * Disallow throwing literals as exceptions.
 *
 * @see [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)
 */
export type NoThrowLiteralRuleConfig = RuleConfig<[]>;

/**
 * Disallow throwing literals as exceptions.
 *
 * @see [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)
 */
export interface NoThrowLiteralRule {
  /**
   * Disallow throwing literals as exceptions.
   *
   * @see [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)
   */
  'no-throw-literal': NoThrowLiteralRuleConfig;
}
