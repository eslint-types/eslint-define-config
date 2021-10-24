import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUndefPropertiesOption {
  ignores?: string[];
}

/**
 * Options.
 */
export type NoUndefPropertiesOptions = [NoUndefPropertiesOption?];

/**
 * Disallow undefined properties.
 *
 * @see [no-undef-properties](https://eslint.vuejs.org/rules/no-undef-properties.html)
 */
export type NoUndefPropertiesRuleConfig = RuleConfig<NoUndefPropertiesOptions>;

/**
 * Disallow undefined properties.
 *
 * @see [no-undef-properties](https://eslint.vuejs.org/rules/no-undef-properties.html)
 */
export interface NoUndefPropertiesRule {
  /**
   * Disallow undefined properties.
   *
   * @see [no-undef-properties](https://eslint.vuejs.org/rules/no-undef-properties.html)
   */
  'vue/no-undef-properties': NoUndefPropertiesRuleConfig;
}
