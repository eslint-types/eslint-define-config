import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type KeywordSpacingOption = {
  /**
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  before?: any;

  /**
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  after?: any;

  /**
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  overrides?: any;
};

/**
 * Options.
 */
export type KeywordSpacingOptions = [KeywordSpacingOption?];

/**
 * enforce consistent spacing before and after keywords
 *
 * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
 */
export type KeywordSpacingRuleConfig = RuleConfig<KeywordSpacingOptions>;

/**
 * enforce consistent spacing before and after keywords
 *
 * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
 */
export interface KeywordSpacingRule {
  /**
   * enforce consistent spacing before and after keywords
   *
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  'vue/keyword-spacing': KeywordSpacingRuleConfig;
}
