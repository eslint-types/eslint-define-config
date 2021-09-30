import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type KeywordSpacingOption = {
  before?: boolean;
  after?: boolean;
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
