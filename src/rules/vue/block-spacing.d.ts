import type { RuleConfig } from '../rule-config';

/**
 * disallow or enforce spaces inside of blocks after opening block and before closing block
 *
 * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
 */
export type BlockSpacingRuleConfig = RuleConfig<[]>;

/**
 * disallow or enforce spaces inside of blocks after opening block and before closing block
 *
 * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
 */
export interface BlockSpacingRule {
  /**
   * disallow or enforce spaces inside of blocks after opening block and before closing block
   *
   * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
   */
  'vue/block-spacing': BlockSpacingRuleConfig;
}
