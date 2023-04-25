import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxPropsNoSpreadingOption = {
  html?: 'enforce' | 'ignore';
  custom?: 'enforce' | 'ignore';
  exceptions?: string[];
  [k: string]: any;
};

/**
 * Options.
 */
export type JsxPropsNoSpreadingOptions = [JsxPropsNoSpreadingOption?];

/**
 * Disallow JSX prop spreading.
 *
 * @see [jsx-props-no-spreading](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md)
 */
export type JsxPropsNoSpreadingRuleConfig =
  RuleConfig<JsxPropsNoSpreadingOptions>;

/**
 * Disallow JSX prop spreading.
 *
 * @see [jsx-props-no-spreading](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md)
 */
export interface JsxPropsNoSpreadingRule {
  /**
   * Disallow JSX prop spreading.
   *
   * @see [jsx-props-no-spreading](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md)
   */
  'react/jsx-props-no-spreading': JsxPropsNoSpreadingRuleConfig;
}
