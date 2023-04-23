import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxOneExpressionPerLineOption {
  allow?: 'none' | 'literal' | 'single-child';
}

/**
 * Options.
 */
export type JsxOneExpressionPerLineOptions = [JsxOneExpressionPerLineOption?];

/**
 * Require one JSX element per line.
 *
 * @see [jsx-one-expression-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)
 */
export type JsxOneExpressionPerLineRuleConfig =
  RuleConfig<JsxOneExpressionPerLineOptions>;

/**
 * Require one JSX element per line.
 *
 * @see [jsx-one-expression-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)
 */
export interface JsxOneExpressionPerLineRule {
  /**
   * Require one JSX element per line.
   *
   * @see [jsx-one-expression-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)
   */
  'react/jsx-one-expression-per-line': JsxOneExpressionPerLineRuleConfig;
}
