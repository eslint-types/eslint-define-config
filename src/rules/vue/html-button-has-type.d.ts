import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type HtmlButtonHasTypeOption = {
  /**
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  button?: boolean;

  /**
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  submit?: boolean;

  /**
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  reset?: boolean;
};

/**
 * Options.
 */
export type HtmlButtonHasTypeOptions = [HtmlButtonHasTypeOption?];

/**
 * Disallow usage of button without an explicit type attribute
 *
 * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
 */
export type HtmlButtonHasTypeRuleConfig = RuleConfig<HtmlButtonHasTypeOptions>;

/**
 * Disallow usage of button without an explicit type attribute
 *
 * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
 */
export interface HtmlButtonHasTypeRule {
  /**
   * Disallow usage of button without an explicit type attribute
   *
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  'vue/html-button-has-type': HtmlButtonHasTypeRuleConfig;
}
