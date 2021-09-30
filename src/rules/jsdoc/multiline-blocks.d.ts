import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MultilineBlocksOption = {
  /**
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  allowMultipleTags?: boolean;

  /**
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  minimumLengthForMultiline?: number;

  /**
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  multilineTags?: any;

  /**
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  noFinalLineText?: boolean;

  /**
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  noMultilineBlocks?: boolean;

  /**
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  noSingleLineBlocks?: boolean;

  /**
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  noZeroLineText?: boolean;

  /**
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  singleLineTags?: any[];
};

/**
 * Options.
 */
export type MultilineBlocksOptions = [MultilineBlocksOption?];

/**
 * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
 *
 * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
 */
export type MultilineBlocksRuleConfig = RuleConfig<MultilineBlocksOptions>;

/**
 * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
 *
 * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
 */
export interface MultilineBlocksRule {
  /**
   * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
   *
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
   */
  'jsdoc/multiline-blocks': MultilineBlocksRuleConfig;
}
