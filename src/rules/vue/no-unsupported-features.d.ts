import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnsupportedFeaturesOption = {
  /**
   * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
   */
  version?: any;

  /**
   * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
   */
  ignores?: any;
};

/**
 * Options.
 */
export type NoUnsupportedFeaturesOptions = [NoUnsupportedFeaturesOption?];

/**
 * Disallow unsupported Vue.js syntax on the specified version
 *
 * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
 */
export type NoUnsupportedFeaturesRuleConfig = RuleConfig<NoUnsupportedFeaturesOptions>;

/**
 * Disallow unsupported Vue.js syntax on the specified version
 *
 * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
 */
export interface NoUnsupportedFeaturesRule {
  /**
   * Disallow unsupported Vue.js syntax on the specified version
   *
   * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
   */
  'vue/no-unsupported-features': NoUnsupportedFeaturesRuleConfig;
}
