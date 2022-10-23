import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BlockTagNewlineOption {
  singleline?: 'always' | 'never' | 'consistent' | 'ignore';
  multiline?: 'always' | 'never' | 'consistent' | 'ignore';
  maxEmptyLines?: number;
  blocks?: {
    /**
     */
    [k: string]: {
      singleline?: 'always' | 'never' | 'consistent' | 'ignore';
      multiline?: 'always' | 'never' | 'consistent' | 'ignore';
      maxEmptyLines?: number;
    };
  };
}

/**
 * Options.
 */
export type BlockTagNewlineOptions = [BlockTagNewlineOption?];

/**
 * Enforce line breaks after opening and before closing block-level tags.
 *
 * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
 */
export type BlockTagNewlineRuleConfig = RuleConfig<BlockTagNewlineOptions>;

/**
 * Enforce line breaks after opening and before closing block-level tags.
 *
 * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
 */
export interface BlockTagNewlineRule {
  /**
   * Enforce line breaks after opening and before closing block-level tags.
   *
   * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
   */
  'vue/block-tag-newline': BlockTagNewlineRuleConfig;
}
