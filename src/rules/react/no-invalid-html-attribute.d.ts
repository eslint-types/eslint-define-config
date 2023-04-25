import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoInvalidHtmlAttributeOption = 'rel'[];

/**
 * Options.
 */
export type NoInvalidHtmlAttributeOptions = [NoInvalidHtmlAttributeOption?];

/**
 * Disallow usage of invalid attributes.
 *
 * @see [no-invalid-html-attribute](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md)
 */
export type NoInvalidHtmlAttributeRuleConfig =
  RuleConfig<NoInvalidHtmlAttributeOptions>;

/**
 * Disallow usage of invalid attributes.
 *
 * @see [no-invalid-html-attribute](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md)
 */
export interface NoInvalidHtmlAttributeRule {
  /**
   * Disallow usage of invalid attributes.
   *
   * @see [no-invalid-html-attribute](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md)
   */
  'react/no-invalid-html-attribute': NoInvalidHtmlAttributeRuleConfig;
}
