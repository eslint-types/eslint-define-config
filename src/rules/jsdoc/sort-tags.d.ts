import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortTagsOption {
  alphabetizeExtras?: boolean;
  linesBetween?: number;
  reportIntraTagGroupSpacing?: boolean;
  reportTagGroupSpacing?: boolean;
  tagSequence?: {
    tags?: string[];
    [k: string]: any;
  }[];
}

/**
 * Options.
 */
export type SortTagsOptions = [SortTagsOption?];

/**
 * Sorts tags by a specified sequence according to tag name.
 *
 * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header)
 */
export type SortTagsRuleConfig = RuleConfig<SortTagsOptions>;

/**
 * Sorts tags by a specified sequence according to tag name.
 *
 * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header)
 */
export interface SortTagsRule {
  /**
   * Sorts tags by a specified sequence according to tag name.
   *
   * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header)
   */
  'jsdoc/sort-tags': SortTagsRuleConfig;
}
