import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BlockSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type BlockSpacingOptions = [BlockSpacingOption?];

/**
 * Disallow or enforce spaces inside of blocks after opening block and before closing block.
 *
 * @see [block-spacing](https://typescript-eslint.io/rules/block-spacing)
 */
export type BlockSpacingRuleConfig = RuleConfig<BlockSpacingOptions>;

/**
 * Disallow or enforce spaces inside of blocks after opening block and before closing block.
 *
 * @see [block-spacing](https://typescript-eslint.io/rules/block-spacing)
 */
export interface BlockSpacingRule {
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block.
   *
   * @see [block-spacing](https://typescript-eslint.io/rules/block-spacing)
   */
  '@typescript-eslint/block-spacing': BlockSpacingRuleConfig;
}
