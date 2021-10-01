import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type QuotesConfig =
  | 'avoid-escape'
  | {
      /**
       * Allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise.
       */
      avoidEscape?: boolean;
      /**
       * Allows strings to use backticks.
       */
      allowTemplateLiterals?: boolean;
    };

/**
 * Option.
 */
export type QuotesOption = 'single' | 'double' | 'backtick';

/**
 * Options.
 */
export type QuotesOptions = [QuotesOption?, QuotesConfig?];

/**
 * Enforce the consistent use of either backticks, double, or single quotes.
 *
 * @see [quotes](https://eslint.org/docs/rules/quotes)
 */
export type QuotesRuleConfig = RuleConfig<QuotesOptions>;

/**
 * Enforce the consistent use of either backticks, double, or single quotes.
 *
 * @see [quotes](https://eslint.org/docs/rules/quotes)
 */
export interface QuotesRule {
  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   *
   * @see [quotes](https://eslint.org/docs/rules/quotes)
   */
  quotes: QuotesRuleConfig;
}
