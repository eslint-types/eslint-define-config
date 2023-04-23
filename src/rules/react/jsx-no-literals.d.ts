import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxNoLiteralsOption {
  noStrings?: boolean;
  allowedStrings?: string[];
  ignoreProps?: boolean;
  noAttributeStrings?: boolean;
}

/**
 * Options.
 */
export type JsxNoLiteralsOptions = [JsxNoLiteralsOption?];

/**
 * Disallow usage of string literals in JSX.
 *
 * @see [jsx-no-literals](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)
 */
export type JsxNoLiteralsRuleConfig = RuleConfig<JsxNoLiteralsOptions>;

/**
 * Disallow usage of string literals in JSX.
 *
 * @see [jsx-no-literals](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)
 */
export interface JsxNoLiteralsRule {
  /**
   * Disallow usage of string literals in JSX.
   *
   * @see [jsx-no-literals](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)
   */
  'react/jsx-no-literals': JsxNoLiteralsRuleConfig;
}
