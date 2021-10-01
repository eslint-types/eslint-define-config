import type { RuleConfig } from '../rule-config';

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
 * @see [quotes](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/quotes.md)
 */
export type QuotesRuleConfig = RuleConfig<QuotesOptions>;

/**
 * Enforce the consistent use of either backticks, double, or single quotes.
 *
 * @see [quotes](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/quotes.md)
 */
export interface QuotesRule {
  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   *
   * @see [quotes](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/quotes.md)
   */
  '@typescript-eslint/quotes': QuotesRuleConfig;
}
