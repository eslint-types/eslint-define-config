import type { RuleConfig } from '../rule-config';

/**
 * Disallow or enforce spaces inside of blocks after opening block and before closing block
 *
 * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
 */
export type BlockSpacingRuleConfig = RuleConfig<[]>;

/**
 * Disallow or enforce spaces inside of blocks after opening block and before closing block
 *
 * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
 */
export interface BlockSpacingRule {
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   *
   * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
   */
  'vue/block-spacing': BlockSpacingRuleConfig;
}
