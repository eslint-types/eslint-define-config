import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PaddingLineBetweenTagsOption = {
  blankLine: 'always' | 'never' | 'consistent';
  prev: string;
  next: string;
}[];

/**
 * Options.
 */
export type PaddingLineBetweenTagsOptions = [PaddingLineBetweenTagsOption?];

/**
 * Require or disallow newlines between sibling tags in template.
 *
 * @see [padding-line-between-tags](https://eslint.vuejs.org/rules/padding-line-between-tags.html)
 */
export type PaddingLineBetweenTagsRuleConfig =
  RuleConfig<PaddingLineBetweenTagsOptions>;

/**
 * Require or disallow newlines between sibling tags in template.
 *
 * @see [padding-line-between-tags](https://eslint.vuejs.org/rules/padding-line-between-tags.html)
 */
export interface PaddingLineBetweenTagsRule {
  /**
   * Require or disallow newlines between sibling tags in template.
   *
   * @see [padding-line-between-tags](https://eslint.vuejs.org/rules/padding-line-between-tags.html)
   */
  'vue/padding-line-between-tags': PaddingLineBetweenTagsRuleConfig;
}
