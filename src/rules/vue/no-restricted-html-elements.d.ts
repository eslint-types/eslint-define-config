import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedHtmlElementsOption = (
  | string
  | {
      element: string;
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedHtmlElementsOptions = NoRestrictedHtmlElementsOption;

/**
 * Disallow specific HTML elements.
 *
 * @see [no-restricted-html-elements](https://eslint.vuejs.org/rules/no-restricted-html-elements.html)
 */
export type NoRestrictedHtmlElementsRuleConfig =
  RuleConfig<NoRestrictedHtmlElementsOptions>;

/**
 * Disallow specific HTML elements.
 *
 * @see [no-restricted-html-elements](https://eslint.vuejs.org/rules/no-restricted-html-elements.html)
 */
export interface NoRestrictedHtmlElementsRule {
  /**
   * Disallow specific HTML elements.
   *
   * @see [no-restricted-html-elements](https://eslint.vuejs.org/rules/no-restricted-html-elements.html)
   */
  'vue/no-restricted-html-elements': NoRestrictedHtmlElementsRuleConfig;
}
