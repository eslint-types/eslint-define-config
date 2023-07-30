import type { RuleConfig } from '../rule-config';

/**
 * Prefer using `.dataset` on DOM elements over calling attribute methods.
 *
 * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-dataset.md)
 */
export type PreferDomNodeDatasetRuleConfig = RuleConfig<[]>;

/**
 * Prefer using `.dataset` on DOM elements over calling attribute methods.
 *
 * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-dataset.md)
 */
export interface PreferDomNodeDatasetRule {
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   *
   * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-dom-node-dataset.md)
   */
  'unicorn/prefer-dom-node-dataset': PreferDomNodeDatasetRuleConfig;
}
