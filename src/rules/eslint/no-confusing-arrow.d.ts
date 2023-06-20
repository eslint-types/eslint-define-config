import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoConfusingArrowOption {
  allowParens?: boolean;
  onlyOneSimpleParam?: boolean;
}

/**
 * Options.
 */
export type NoConfusingArrowOptions = [NoConfusingArrowOption?];

/**
 * Disallow arrow functions where they could be confused with comparisons.
 *
 * @see [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)
 */
export type NoConfusingArrowRuleConfig = RuleConfig<NoConfusingArrowOptions>;

/**
 * Disallow arrow functions where they could be confused with comparisons.
 *
 * @see [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)
 */
export interface NoConfusingArrowRule {
  /**
   * Disallow arrow functions where they could be confused with comparisons.
   *
   * @see [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)
   */
  'no-confusing-arrow': NoConfusingArrowRuleConfig;
}
