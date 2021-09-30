import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type KeywordSpacingOption = {
  /**
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  before?: boolean;

  /**
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  after?: boolean;

  /**
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  overrides?: Record<string, any>;
};

/**
 * Options.
 */
export type KeywordSpacingOptions = [KeywordSpacingOption?];

/**
 * Enforce consistent spacing before and after keywords
 *
 * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
 */
export type KeywordSpacingRuleConfig = RuleConfig<KeywordSpacingOptions>;

/**
 * Enforce consistent spacing before and after keywords
 *
 * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
 */
export interface KeywordSpacingRule {
  /**
   * Enforce consistent spacing before and after keywords
   *
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  'vue/keyword-spacing': KeywordSpacingRuleConfig;
}
