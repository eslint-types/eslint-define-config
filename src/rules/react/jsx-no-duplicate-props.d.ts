import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxNoDuplicatePropsOption {
  ignoreCase?: boolean;
}

/**
 * Options.
 */
export type JsxNoDuplicatePropsOptions = [JsxNoDuplicatePropsOption?];

/**
 * Disallow duplicate properties in JSX.
 *
 * @see [jsx-no-duplicate-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md)
 */
export type JsxNoDuplicatePropsRuleConfig =
  RuleConfig<JsxNoDuplicatePropsOptions>;

/**
 * Disallow duplicate properties in JSX.
 *
 * @see [jsx-no-duplicate-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md)
 */
export interface JsxNoDuplicatePropsRule {
  /**
   * Disallow duplicate properties in JSX.
   *
   * @see [jsx-no-duplicate-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md)
   */
  'react/jsx-no-duplicate-props': JsxNoDuplicatePropsRuleConfig;
}
