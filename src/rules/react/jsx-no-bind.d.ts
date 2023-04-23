import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxNoBindOption {
  allowArrowFunctions?: boolean;
  allowBind?: boolean;
  allowFunctions?: boolean;
  ignoreRefs?: boolean;
  ignoreDOMComponents?: boolean;
}

/**
 * Options.
 */
export type JsxNoBindOptions = [JsxNoBindOption?];

/**
 * Disallow `.bind()` or arrow functions in JSX props.
 *
 * @see [jsx-no-bind](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)
 */
export type JsxNoBindRuleConfig = RuleConfig<JsxNoBindOptions>;

/**
 * Disallow `.bind()` or arrow functions in JSX props.
 *
 * @see [jsx-no-bind](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)
 */
export interface JsxNoBindRule {
  /**
   * Disallow `.bind()` or arrow functions in JSX props.
   *
   * @see [jsx-no-bind](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)
   */
  'react/jsx-no-bind': JsxNoBindRuleConfig;
}
