import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MaxAttributesPerLineOption {
  singleline?:
    | number
    | {
        max?: number;
      };
  multiline?:
    | number
    | {
        max?: number;
      };
}

/**
 * Options.
 */
export type MaxAttributesPerLineOptions = [MaxAttributesPerLineOption?];

/**
 * Enforce the maximum number of attributes per line.
 *
 * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
 */
export type MaxAttributesPerLineRuleConfig =
  RuleConfig<MaxAttributesPerLineOptions>;

/**
 * Enforce the maximum number of attributes per line.
 *
 * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
 */
export interface MaxAttributesPerLineRule {
  /**
   * Enforce the maximum number of attributes per line.
   *
   * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
   */
  'vue/max-attributes-per-line': MaxAttributesPerLineRuleConfig;
}
