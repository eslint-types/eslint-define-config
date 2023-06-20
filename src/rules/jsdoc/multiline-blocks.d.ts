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
}

/**
 * Options.
 */
export type MultilineBlocksOptions = [MultilineBlocksOption?];

/**
 * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
 *
 * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header)
 */
export type MultilineBlocksRuleConfig = RuleConfig<MultilineBlocksOptions>;

/**
 * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
 *
 * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header)
 */
export interface MultilineBlocksRule {
  /**
   * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
   *
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header)
   */
  'jsdoc/multiline-blocks': MultilineBlocksRuleConfig;
}
