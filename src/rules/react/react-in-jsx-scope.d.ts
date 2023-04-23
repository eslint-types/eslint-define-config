import type { RuleConfig } from '../rule-config';

/**
 * Disallow missing React when using JSX.
 *
 * @see [react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md)
 */
export type ReactInJsxScopeRuleConfig = RuleConfig<[]>;

/**
 * Disallow missing React when using JSX.
 *
 * @see [react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md)
 */
export interface ReactInJsxScopeRule {
  /**
   * Disallow missing React when using JSX.
   *
   * @see [react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md)
   */
  'react/react-in-jsx-scope': ReactInJsxScopeRuleConfig;
}
