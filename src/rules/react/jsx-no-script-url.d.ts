import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxNoScriptUrlOption = {
  name: string;
  props: string[];
}[];

/**
 * Options.
 */
export type JsxNoScriptUrlOptions = [JsxNoScriptUrlOption?];

/**
 * Disallow usage of `javascript:` URLs.
 *
 * @see [jsx-no-script-url](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md)
 */
export type JsxNoScriptUrlRuleConfig = RuleConfig<JsxNoScriptUrlOptions>;

/**
 * Disallow usage of `javascript:` URLs.
 *
 * @see [jsx-no-script-url](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md)
 */
export interface JsxNoScriptUrlRule {
  /**
   * Disallow usage of `javascript:` URLs.
   *
   * @see [jsx-no-script-url](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md)
   */
  'react/jsx-no-script-url': JsxNoScriptUrlRuleConfig;
}
