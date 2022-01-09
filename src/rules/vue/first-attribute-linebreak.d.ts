import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface FirstAttributeLinebreakOption {
  multiline?: 'below' | 'beside' | 'ignore';
  singleline?: 'below' | 'beside' | 'ignore';
}

/**
 * Options.
 */
export type FirstAttributeLinebreakOptions = [FirstAttributeLinebreakOption?];

/**
 * Enforce the location of first attribute.
 *
 * @see [first-attribute-linebreak](https://eslint.vuejs.org/rules/first-attribute-linebreak.html)
 */
export type FirstAttributeLinebreakRuleConfig =
  RuleConfig<FirstAttributeLinebreakOptions>;

/**
 * Enforce the location of first attribute.
 *
 * @see [first-attribute-linebreak](https://eslint.vuejs.org/rules/first-attribute-linebreak.html)
 */
export interface FirstAttributeLinebreakRule {
  /**
   * Enforce the location of first attribute.
   *
   * @see [first-attribute-linebreak](https://eslint.vuejs.org/rules/first-attribute-linebreak.html)
   */
  'vue/first-attribute-linebreak': FirstAttributeLinebreakRuleConfig;
}
