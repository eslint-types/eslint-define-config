import type { RuleConfig } from '../rule-config';

/**
 * Prefer using `.dataset` on DOM elements over `.setAttribute(…)`.
 *
 * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/prefer-dom-node-dataset.md)
 */
export type PreferDomNodeDatasetRuleConfig = RuleConfig<[]>;

/**
 * Prefer using `.dataset` on DOM elements over `.setAttribute(…)`.
 *
 * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/prefer-dom-node-dataset.md)
 */
export interface PreferDomNodeDatasetRule {
  /**
   * Prefer using `.dataset` on DOM elements over `.setAttribute(…)`.
   *
   * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/prefer-dom-node-dataset.md)
   */
  'unicorn/prefer-dom-node-dataset': PreferDomNodeDatasetRuleConfig;
}
