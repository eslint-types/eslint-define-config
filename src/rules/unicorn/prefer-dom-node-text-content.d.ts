import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Prefer `.textContent` over `.innerText`.
 *
 * @see [prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-text-content.md)
 */
export type PreferDomNodeTextContentRuleConfig = RuleConfig<[]>;

/**
 * Prefer `.textContent` over `.innerText`.
 *
 * @see [prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-text-content.md)
 */
export interface PreferDomNodeTextContentRule {
  /**
   * Prefer `.textContent` over `.innerText`.
   *
   * @see [prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-text-content.md)
   */
  'unicorn/prefer-dom-node-text-content': PreferDomNodeTextContentRuleConfig;
}
