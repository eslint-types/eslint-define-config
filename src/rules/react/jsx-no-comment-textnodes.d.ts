import type { RuleConfig } from '../rule-config';

/**
 * Disallow comments from being inserted as text nodes.
 *
 * @see [jsx-no-comment-textnodes](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)
 */
export type JsxNoCommentTextnodesRuleConfig = RuleConfig<[]>;

/**
 * Disallow comments from being inserted as text nodes.
 *
 * @see [jsx-no-comment-textnodes](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)
 */
export interface JsxNoCommentTextnodesRule {
  /**
   * Disallow comments from being inserted as text nodes.
   *
   * @see [jsx-no-comment-textnodes](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)
   */
  'react/jsx-no-comment-textnodes': JsxNoCommentTextnodesRuleConfig;
}
