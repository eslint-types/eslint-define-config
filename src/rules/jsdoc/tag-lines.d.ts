import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface TagLinesConfig {
  count?: number;
  dropEndLines?: boolean;
  noEndLines?: boolean;
  tags?: {
    /**
     */
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
