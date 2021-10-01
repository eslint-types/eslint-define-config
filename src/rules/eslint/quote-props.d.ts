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
        /**
         * Requires quotes around language keywords used as object property names.
         *
         * @default true
         *
         * @see [keywords](https://eslint.org/docs/rules/quote-props#keywords)
         */
        keywords?: boolean;
        /**
         * Dis-/allows quotes around object literal property names that are not strictly required.
         *
         * @default true
         *
         * @see [unnecessary](https://eslint.org/docs/rules/quote-props#unnecessary)
         */
        unnecessary?: boolean;
        /**
         * Requires quotes around numbers used as object property names.
         *
         * @default true
         *
         * @see [numbers](https://eslint.org/docs/rules/quote-props#numbers)
         */
        numbers?: boolean;
      }
    ];

/**
 * Options.
 */
export type QuotePropsOptions = [QuotePropsOption?];

/**
 * Require quotes around object literal property names.
 *
 * @see [quote-props](https://eslint.org/docs/rules/quote-props)
 */
export type QuotePropsRuleConfig = RuleConfig<QuotePropsOptions>;

/**
 * Require quotes around object literal property names.
 *
 * @see [quote-props](https://eslint.org/docs/rules/quote-props)
 */
export interface QuotePropsRule {
  /**
   * Require quotes around object literal property names.
   *
   * @see [quote-props](https://eslint.org/docs/rules/quote-props)
   */
  'quote-props': QuotePropsRuleConfig;
}
