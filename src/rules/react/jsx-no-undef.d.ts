import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxNoUndefOption {
  allowGlobals?: boolean;
}

/**
 * Options.
 */
export type JsxNoUndefOptions = [JsxNoUndefOption?];

/**
 * Disallow undeclared variables in JSX.
 *
 * @see [jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md)
 */
export type JsxNoUndefRuleConfig = RuleConfig<JsxNoUndefOptions>;

/**
 * Disallow undeclared variables in JSX.
 *
 * @see [jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md)
 */
export interface JsxNoUndefRule {
  /**
   * Disallow undeclared variables in JSX.
   *
   * @see [jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md)
   */
  'react/jsx-no-undef': JsxNoUndefRuleConfig;
}
