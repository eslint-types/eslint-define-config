import type { RuleConfig } from '../rule-config';

/**
 * Disallow usage of findDOMNode.
 *
 * @see [no-find-dom-node](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md)
 */
export type NoFindDomNodeRuleConfig = RuleConfig<[]>;

/**
 * Disallow usage of findDOMNode.
 *
 * @see [no-find-dom-node](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md)
 */
export interface NoFindDomNodeRule {
  /**
   * Disallow usage of findDOMNode.
   *
   * @see [no-find-dom-node](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md)
   */
  'react/no-find-dom-node': NoFindDomNodeRuleConfig;
}
