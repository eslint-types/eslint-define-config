import type { RuleConfig } from '../rule-config';

/**
 * disallow spaces around equal signs in attribute
 *
 * @see [no-spaces-around-equal-signs-in-attribute](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html)
 */
export type NoSpacesAroundEqualSignsInAttributeRuleConfig = RuleConfig<[]>;

/**
 * disallow spaces around equal signs in attribute
 *
 * @see [no-spaces-around-equal-signs-in-attribute](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html)
 */
export interface NoSpacesAroundEqualSignsInAttributeRule {
  /**
   * disallow spaces around equal signs in attribute
   *
   * @see [no-spaces-around-equal-signs-in-attribute](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html)
   */
  'vue/no-spaces-around-equal-signs-in-attribute': NoSpacesAroundEqualSignsInAttributeRuleConfig;
}
