import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface TagLinesConfig {
  /**
   * Use with "always" to indicate the number of lines to require be present.
   *
   * @default 1
   *
   * @see [count](https://github.com/gajus/eslint-plugin-jsdoc#count-defaults-to-1)
   */
  count?: number;
  /**
   * Use with "always" to indicate the normal lines to be added after tags should not be added after the final tag.
   *
   * @default false
   *
   * @see [noEndLines](https://github.com/gajus/eslint-plugin-jsdoc#noendlines-defaults-to-false)
   */
  noEndLines?: boolean;
  tags?: {
    [k: string]: {
      count?: number;
      lines?: 'always' | 'never' | 'any';
    };
  };
  [k: string]: any;
}

/**
 * Option.
 */
export type TagLinesOption = 'always' | 'any' | 'never';

/**
 * Options.
 */
export type TagLinesOptions = [TagLinesOption?, TagLinesConfig?];

/**
 * Enforces lines (or no lines) between tags.
 *
 * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-tag-lines)
 */
export type TagLinesRuleConfig = RuleConfig<TagLinesOptions>;

/**
 * Enforces lines (or no lines) between tags.
 *
 * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-tag-lines)
 */
export interface TagLinesRule {
  /**
   * Enforces lines (or no lines) between tags.
   *
   * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-tag-lines)
   */
  'jsdoc/tag-lines': TagLinesRuleConfig;
}
