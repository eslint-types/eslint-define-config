import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortTagsOption {
  alphabetizeExtras?: boolean;
  tagSequence?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type SortTagsOptions = [SortTagsOption?];

/**
 *
 * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-sort-tags)
 */
export type SortTagsRuleConfig = RuleConfig<SortTagsOptions>;

/**
 *
 * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-sort-tags)
 */
export interface SortTagsRule {
  /**
   *
   * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-sort-tags)
   */
  'jsdoc/sort-tags': SortTagsRuleConfig;
}
