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
 * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks)
 */
export type NoBadBlocksRuleConfig = RuleConfig<NoBadBlocksOptions>;

/**
 * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
 *
 * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks)
 */
export interface NoBadBlocksRule {
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
   *
   * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks)
   */
  'jsdoc/no-bad-blocks': NoBadBlocksRuleConfig;
}
