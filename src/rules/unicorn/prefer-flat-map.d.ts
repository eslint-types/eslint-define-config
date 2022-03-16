import type { RuleConfig } from '../rule-config';

/**
 *
 *
 * @deprecated
 *
 * @see [prefer-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/deprecated-rules.md#prefer-flat-map)
 */
export type PreferFlatMapRuleConfig = RuleConfig<[]>;

/**
 *
 *
 * @deprecated
 *
 * @see [prefer-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/deprecated-rules.md#prefer-flat-map)
 */
export interface PreferFlatMapRule {
  /**
   *
   *
   * @deprecated
   *
   * @see [prefer-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/deprecated-rules.md#prefer-flat-map)
   */
  'unicorn/prefer-flat-map': PreferFlatMapRuleConfig;
}
