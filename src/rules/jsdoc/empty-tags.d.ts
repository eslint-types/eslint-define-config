import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface EmptyTagsOption {
  tags?: string[];
}

/**
 * Options.
 */
export type EmptyTagsOptions = [EmptyTagsOption?];

/**
 * Expects specific tags to be empty of any content.
 *
 * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header)
 */
export type EmptyTagsRuleConfig = RuleConfig<EmptyTagsOptions>;

/**
 * Expects specific tags to be empty of any content.
 *
 * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header)
 */
export interface EmptyTagsRule {
  /**
   * Expects specific tags to be empty of any content.
   *
   * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header)
   */
  'jsdoc/empty-tags': EmptyTagsRuleConfig;
}
