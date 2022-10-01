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
 * Enforce use of double or single quotes.
 *
 * @see [quotes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html)
 */
export type QuotesRuleConfig = RuleConfig<QuotesOptions>;

/**
 * Enforce use of double or single quotes.
 *
 * @see [quotes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html)
 */
export interface QuotesRule {
  /**
   * Enforce use of double or single quotes.
   *
   * @see [quotes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html)
   */
  'jsonc/quotes': QuotesRuleConfig;
}
