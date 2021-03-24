import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type QuotesOption = 'double' | 'single' | 'backtick';

/**
 *
 */
export interface QuotesConfig {
  /**
   * Allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise.
   */
  avoidEscape?: boolean;
  /**
   * Allows strings to use backticks.
   */
  allowTemplateLiterals?: boolean;
}

/**
 *
 */
export type QuotesRuleConfig = RuleConfig<[QuotesOption, QuotesConfig]>;

/**
 *
 */
export interface QuotesRule {
  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   *
   * @see [quotes](https://eslint.org/docs/rules/quotes)
   */
  quotes: QuotesRuleConfig;
}
