import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxAttributesPerLineOption = {
  /**
   * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
   */
  singleline?: any;

  /**
   * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
   */
  multiline?: any;
};

/**
 * Options.
 */
export type MaxAttributesPerLineOptions = [MaxAttributesPerLineOption?];

/**
 * enforce the maximum number of attributes per line
 *
 * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
 */
export type MaxAttributesPerLineRuleConfig = RuleConfig<MaxAttributesPerLineOptions>;

/**
 * enforce the maximum number of attributes per line
 *
 * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
 */
export interface MaxAttributesPerLineRule {
  /**
   * enforce the maximum number of attributes per line
   *
   * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
   */
  'vue/max-attributes-per-line': MaxAttributesPerLineRuleConfig;
}
