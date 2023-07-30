import type { RuleConfig } from '../rule-config';

/**
 * Prefer `Node#append()` over `Node#appendChild()`.
 *
 * @see [prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-append.md)
 */
export type PreferDomNodeAppendRuleConfig = RuleConfig<[]>;

/**
 * Prefer `Node#append()` over `Node#appendChild()`.
 *
 * @see [prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-append.md)
 */
export interface PreferDomNodeAppendRule {
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   *
   * @see [prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-append.md)
   */
  'unicorn/prefer-dom-node-append': PreferDomNodeAppendRuleConfig;
}
