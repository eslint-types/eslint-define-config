import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BlockTagNewlineOption = {
  /**
   * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
   */
  singleline?: any;

  /**
   * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
   */
  multiline?: any;

  /**
   * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
   */
  maxEmptyLines?: number;

  /**
   * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
   */
  blocks?: Record<string, any>;
};

/**
 * Options.
 */
export type BlockTagNewlineOptions = [BlockTagNewlineOption?];

/**
 * Enforce line breaks after opening and before closing block-level tags
 *
 * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
 */
export type BlockTagNewlineRuleConfig = RuleConfig<BlockTagNewlineOptions>;

/**
 * Enforce line breaks after opening and before closing block-level tags
 *
 * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
 */
export interface BlockTagNewlineRule {
  /**
   * Enforce line breaks after opening and before closing block-level tags
   *
   * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
   */
  'vue/block-tag-newline': BlockTagNewlineRuleConfig;
}
