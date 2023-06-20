import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface TagLinesConfig {
  applyToEndTag?: boolean;
  count?: number;
  endLines?: number | null;
  startLines?: number | null;
  tags?: {
    /**
     */
    [k: string]: {
      count?: number;
      lines?: 'always' | 'never' | 'any';
    };
  };
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
 * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header)
 */
export type TagLinesRuleConfig = RuleConfig<TagLinesOptions>;

/**
 * Enforces lines (or no lines) between tags.
 *
 * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header)
 */
export interface TagLinesRule {
  /**
   * Enforces lines (or no lines) between tags.
   *
   * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header)
   */
  'jsdoc/tag-lines': TagLinesRuleConfig;
}
