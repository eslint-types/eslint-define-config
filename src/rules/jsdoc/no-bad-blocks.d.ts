import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoBadBlocksOption {
  ignore?: string[];
  preventAllMultiAsteriskBlocks?: boolean;
}

/**
 * Options.
 */
export type NoBadBlocksOptions = [NoBadBlocksOption?];

/**
 * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
 *
 * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header)
 */
export type NoBadBlocksRuleConfig = RuleConfig<NoBadBlocksOptions>;

/**
 * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
 *
 * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header)
 */
export interface NoBadBlocksRule {
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
   *
   * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header)
   */
  'jsdoc/no-bad-blocks': NoBadBlocksRuleConfig;
}
