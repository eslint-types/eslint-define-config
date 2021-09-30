import type { RuleConfig } from '../rule-config';

/**
 * Require or disallow padding lines between blocks
 *
 * @see [padding-line-between-blocks](https://eslint.vuejs.org/rules/padding-line-between-blocks.html)
 */
export type PaddingLineBetweenBlocksRuleConfig = RuleConfig<[]>;

/**
 * Require or disallow padding lines between blocks
 *
 * @see [padding-line-between-blocks](https://eslint.vuejs.org/rules/padding-line-between-blocks.html)
 */
export interface PaddingLineBetweenBlocksRule {
  /**
   * Require or disallow padding lines between blocks
   *
   * @see [padding-line-between-blocks](https://eslint.vuejs.org/rules/padding-line-between-blocks.html)
   */
  'vue/padding-line-between-blocks': PaddingLineBetweenBlocksRuleConfig;
}
