import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Config.
 */
export type QuotesConfig =
  | 'avoid-escape'
  | {
      avoidEscape?: boolean;
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
 * @see [quotes](https://typescript-eslint.io/rules/quotes)
 */
export type QuotesRuleConfig = RuleConfig<QuotesOptions>;

/**
 * Enforce the consistent use of either backticks, double, or single quotes.
 *
 * @see [quotes](https://typescript-eslint.io/rules/quotes)
 */
export interface QuotesRule {
  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   *
   * @see [quotes](https://typescript-eslint.io/rules/quotes)
   */
  '@typescript-eslint/quotes': QuotesRuleConfig;
}
