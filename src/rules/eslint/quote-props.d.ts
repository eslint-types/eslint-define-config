import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type QuotePropsOption =
  | []
  | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
  | []
  | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
  | [
      'always' | 'as-needed' | 'consistent' | 'consistent-as-needed',
      {
        keywords?: boolean;
        unnecessary?: boolean;
        numbers?: boolean;
      },
    ];

/**
 * Options.
 */
export type QuotePropsOptions = QuotePropsOption;

/**
 * Require quotes around object literal property names.
 *
 * @see [quote-props](https://eslint.org/docs/latest/rules/quote-props)
 */
export type QuotePropsRuleConfig = RuleConfig<QuotePropsOptions>;

/**
 * Require quotes around object literal property names.
 *
 * @see [quote-props](https://eslint.org/docs/latest/rules/quote-props)
 */
export interface QuotePropsRule {
  /**
   * Require quotes around object literal property names.
   *
   * @see [quote-props](https://eslint.org/docs/latest/rules/quote-props)
   */
  'quote-props': QuotePropsRuleConfig;
}
