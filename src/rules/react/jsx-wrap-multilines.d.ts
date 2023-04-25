import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxWrapMultilinesOption {
  declaration?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  assignment?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  return?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  arrow?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  condition?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  logical?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  prop?: true | false | 'ignore' | 'parens' | 'parens-new-line';
}

/**
 * Options.
 */
export type JsxWrapMultilinesOptions = [JsxWrapMultilinesOption?];

/**
 * Disallow missing parentheses around multiline JSX.
 *
 * @see [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)
 */
export type JsxWrapMultilinesRuleConfig = RuleConfig<JsxWrapMultilinesOptions>;

/**
 * Disallow missing parentheses around multiline JSX.
 *
 * @see [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)
 */
export interface JsxWrapMultilinesRule {
  /**
   * Disallow missing parentheses around multiline JSX.
   *
   * @see [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)
   */
  'react/jsx-wrap-multilines': JsxWrapMultilinesRuleConfig;
}
