import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface HtmlHasLangOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type HtmlHasLangOptions = [HtmlHasLangOption?];

/**
 * Enforce `<html>` element has `lang` prop.
 *
 * @see [html-has-lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md)
 */
export type HtmlHasLangRuleConfig = RuleConfig<HtmlHasLangOptions>;

/**
 * Enforce `<html>` element has `lang` prop.
 *
 * @see [html-has-lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md)
 */
export interface HtmlHasLangRule {
  /**
   * Enforce `<html>` element has `lang` prop.
   *
   * @see [html-has-lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md)
   */
  'jsx-a11y/html-has-lang': HtmlHasLangRuleConfig;
}
