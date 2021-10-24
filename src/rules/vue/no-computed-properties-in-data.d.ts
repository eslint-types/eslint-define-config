import type { RuleConfig } from '../rule-config';

/**
 * Disallow accessing computed properties in `data`.
 *
 * @see [no-computed-properties-in-data](https://eslint.vuejs.org/rules/no-computed-properties-in-data.html)
 */
export type NoComputedPropertiesInDataRuleConfig = RuleConfig<[]>;

/**
 * Disallow accessing computed properties in `data`.
 *
 * @see [no-computed-properties-in-data](https://eslint.vuejs.org/rules/no-computed-properties-in-data.html)
 */
export interface NoComputedPropertiesInDataRule {
  /**
   * Disallow accessing computed properties in `data`.
   *
   * @see [no-computed-properties-in-data](https://eslint.vuejs.org/rules/no-computed-properties-in-data.html)
   */
  'vue/no-computed-properties-in-data': NoComputedPropertiesInDataRuleConfig;
}
