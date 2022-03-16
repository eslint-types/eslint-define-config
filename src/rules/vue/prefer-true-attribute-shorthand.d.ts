import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PreferTrueAttributeShorthandOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferTrueAttributeShorthandOptions = [
  PreferTrueAttributeShorthandOption?,
];

/**
 * Require shorthand form attribute when `v-bind` value is `true`.
 *
 * @see [prefer-true-attribute-shorthand](https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html)
 */
export type PreferTrueAttributeShorthandRuleConfig =
  RuleConfig<PreferTrueAttributeShorthandOptions>;

/**
 * Require shorthand form attribute when `v-bind` value is `true`.
 *
 * @see [prefer-true-attribute-shorthand](https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html)
 */
export interface PreferTrueAttributeShorthandRule {
  /**
   * Require shorthand form attribute when `v-bind` value is `true`.
   *
   * @see [prefer-true-attribute-shorthand](https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html)
   */
  'vue/prefer-true-attribute-shorthand': PreferTrueAttributeShorthandRuleConfig;
}
