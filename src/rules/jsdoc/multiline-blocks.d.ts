import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MultilineBlocksOption {
  allowMultipleTags?: boolean;
  minimumLengthForMultiline?: number;
  multilineTags?: '*' | string[];
  noFinalLineText?: boolean;
  noMultilineBlocks?: boolean;
  noSingleLineBlocks?: boolean;
  noZeroLineText?: boolean;
  singleLineTags?: string[];
  [k: string]: any;
}

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
