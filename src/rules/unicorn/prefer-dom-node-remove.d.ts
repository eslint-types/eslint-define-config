import type { RuleConfig } from '../rule-config';

/**
 * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
 *
 * @see [prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-dom-node-remove.md)
 */
export type PreferDomNodeRemoveRuleConfig = RuleConfig<[]>;

/**
 * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
 *
 * @see [prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-dom-node-remove.md)
 */
export interface PreferDomNodeRemoveRule {
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   *
   * @see [prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-dom-node-remove.md)
   */
  'unicorn/prefer-dom-node-remove': PreferDomNodeRemoveRuleConfig;
}
