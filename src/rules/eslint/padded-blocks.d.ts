import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface PaddedBlocksConfig {
  allowSingleLineBlocks?: boolean;
}

/**
 * Option.
 */
export type PaddedBlocksOption =
  | ('always' | 'never')
  | {
      blocks?: 'always' | 'never';
      switches?: 'always' | 'never';
      classes?: 'always' | 'never';
    };

/**
 * Options.
 */
export type PaddedBlocksOptions = [PaddedBlocksOption?, PaddedBlocksConfig?];

/**
 * Require or disallow padding within blocks.
 *
 * @see [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks)
 */
export type PaddedBlocksRuleConfig = RuleConfig<PaddedBlocksOptions>;

/**
 * Require or disallow padding within blocks.
 *
 * @see [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks)
 */
export interface PaddedBlocksRule {
  /**
   * Require or disallow padding within blocks.
   *
   * @see [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks)
   */
  'padded-blocks': PaddedBlocksRuleConfig;
}
