import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface QuotesOption {
  prefer?: 'double' | 'single';
  avoidEscape?: boolean;
}

/**
 * Options.
 */
export type QuotesOptions = [QuotesOption?];

/**
 * Enforce the consistent use of either double, or single quotes.
 *
 * @see [quotes](https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html)
 */
export type QuotesRuleConfig = RuleConfig<QuotesOptions>;

/**
 * Enforce the consistent use of either double, or single quotes.
 *
 * @see [quotes](https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html)
 */
export interface QuotesRule {
  /**
   * Enforce the consistent use of either double, or single quotes.
   *
   * @see [quotes](https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html)
   */
  'yml/quotes': QuotesRuleConfig;
}
