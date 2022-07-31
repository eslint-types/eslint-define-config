import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type HtmlSelfClosingOption =
  | []
  | [
      {
        html?: {
          normal?: OptionValue;
          void?: OptionValue;
          component?: OptionValue;
        };
        svg?: OptionValue;
        math?: OptionValue;
      },
    ];
export type OptionValue = 'always' | 'never' | 'any';

/**
 * Options.
 */
export type HtmlSelfClosingOptions = HtmlSelfClosingOption;

/**
 * Enforce self-closing style.
 *
 * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
 */
export type HtmlSelfClosingRuleConfig = RuleConfig<HtmlSelfClosingOptions>;

/**
 * Enforce self-closing style.
 *
 * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
 */
export interface HtmlSelfClosingRule {
  /**
   * Enforce self-closing style.
   *
   * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
   */
  'vue/html-self-closing': HtmlSelfClosingRuleConfig;
}
