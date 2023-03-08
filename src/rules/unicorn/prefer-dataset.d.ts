import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [prefer-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-dataset)
 */
export type PreferDatasetRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [prefer-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-dataset)
 */
export interface PreferDatasetRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-dataset)
   */
  'unicorn/prefer-dataset': PreferDatasetRuleConfig;
}
