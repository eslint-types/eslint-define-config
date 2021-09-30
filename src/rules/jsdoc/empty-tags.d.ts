import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type EmptyTagsOption = {
  /**
   * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags)
   */
  tags?: any;
};

/**
 * Options.
 */
export type EmptyTagsOptions = [EmptyTagsOption?];

/**
 * Expects specific tags to be empty of any content.
 *
 * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags)
 */
export type EmptyTagsRuleConfig = RuleConfig<EmptyTagsOptions>;

/**
 * Expects specific tags to be empty of any content.
 *
 * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags)
 */
export interface EmptyTagsRule {
  /**
   * Expects specific tags to be empty of any content.
   *
   * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags)
   */
  'jsdoc/empty-tags': EmptyTagsRuleConfig;
}
